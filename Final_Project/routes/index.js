const signupUser = require("../data/database/storeUsers");
const book = require("../data/database/storeBooks");
const express = require("express");
router = express();

router.use(function (req, res, next) {
    let info = '[' + new Date().toUTCString() + ']: ' + req.method + ' ' + req.originalUrl;
    if (req.session.username) {
        info += " (Authenticated User)";
    } else {
        info += " (Non-Authenticated User)";
    }
    console.log(info);
    next();
})

router.use(async function (req, res, next) {
    if (req.url === '/') {
        res.render("page/login", {});
    } else {
        next();
    }
})

router.use(async function (req, res, next) {
    if (req.url === '/login') {
        try {
            // console.log(req.body.username + '    ' + req.body.password)
            if (!(req.body.username && req.body.password)) {
                res.status(401).render("page/error", {
                    error: "You must input userName and password!"
                });
                return;
            }
            let username = req.body.username;
            let password = req.body.password;
            let log = await signupUser.judge(username, password);       //
            // console.log(log);
            if (!log) {
                res.status(401).render("page/error", {
                    error: "No any matched user!"
                });
                return;
            } else {
                req.session.username = username;
                req.session.password = password;
                var arr = await book.sortRating();
                res.render("page/mainPage", {
                    bookName : arr
                });
            }
        } catch (errorMessage) {
            // console.log(errorMessage)
            res.status(500).json({
                error: errorMessage
            });
        }
    } else {
        next();
    }
})

router.get('/booksProfile/:id', async (req, res) =>{
    try {
        var _book = await book.getBookById(req.params.id);
        res.render("page/booksProfile", 
            _book
        )
    } catch (errorMessage) {
        res.status(500).json({
            error: errorMessage
        });
    }

})

// router.use(async function (req, res, next){
//     if(req.url == '/booksProfile'){

//     }
// })

router.use(function (req, res, next) {
    if (req.url === '/logout') {
        try {
            req.session.username = null;
            req.session.password = null;
            res.render("page/login", {});
        } catch (errorMessage) {
            res.status(500).json({
                error: errorMessage
            });
        }
    } else {
        next();
    }
})

router.use(async function (req, res, next) {
    if (req.url === '/signup') {
        try {
            let ss = Object.keys(req.body).length;
            if (ss < 6){
                res.render("page/signup", {});
            }else{
                // console.log(req.body.username)
                const _signupUser = await signupUser.createUser(req.body.username, req.body.password, req.body.Email, req.body.firstName, req.body.lastName);
                // res.status(200).json(_signupUser);
            }
        } catch (errorMessage) {
            // console.log(errorMessage)
            res.status(500).json({
                error: errorMessage
            })
        }
    } else {
        next();
    }
})

router.use(function (req, res, next) {
    res.writeHead(404, {
        "Content-Type": "text/plain"
    });
    res.end("404 not found!\n");
})


const method = app => {
    app.use("/", router);
    app.use("*", (req, res) => {
        res.status(404);
    })


}
module.exports = method;