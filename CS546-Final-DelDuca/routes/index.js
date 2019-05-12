const signupUser = require("../data/database/storeUsers");
const book = require("../data/database/storeBooks");
const express = require("express");
const Select = require("../public/selectOrder");
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
                var arr = await book.getAll();
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
        var book_1 = await book.getBookById(req.params.id);
        res.render("page/booksProfile", 
            book_1
        )
    } catch (errorMessage) {
        res.status(500).json({
            error: errorMessage
        });
    }

})

router.get('/booksSuggest/:id',async(req,res)=>{
    var book_1 = await book.getBookById(req.params.id);
    //console.log(book_1)
    var book_2 = await book.getFamiliar(book_1);
    //console.log(book_2)
    res.json({'target': book_2._id});
})

router.post('/Rating', async (req, res) =>{
    try{
        var book_2 = await book.getBookById(req.body._id);
        book.updateRating(req.body._id,req.body.temp)
    }catch(errorMessage){
        // console.log(errorMessage)
        res.status(500).json({
            error : errorMessage
        });
    }
})

router.post('/select', async (req, res) =>{
    try{
        // console.log(req.body._id);
        var arr = await book.select(req.body._id);
        // console.log(arr)
        res.json(arr);
    }catch(errorMessage){
        res.status(500).json({
            error : errorMessage
        })
    }
})

router.post('/search', async (req, res) =>{
    try{
        var text = await book.findSearch(req.body.search);
        res.render("page/booksProfile",
            text
        );
    }catch (errorMessage){
        res.status(500).json({
            error : errorMessage
        });
    }
})

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