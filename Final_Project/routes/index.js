const userData = require("../data/operation/judgePassword");
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
            if (!(req.body.username && req.body.password)) {
                req.status(401).render("page/error", {
                    error: "You must input userName and password!"
                });
                return;
            }
            let name = req.body.username;
            let password = req.body.password;
            let log = await userData(name, password); 
            if (!log) {
                res.status(401).render("page/error", {
                    error: "No any matched user!"
                });
                return;
            } else {
                req.session.username = name;
                req.session.password = password;
                res.render("page/mainPage", log);
            }
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
    if (req.url === '/mainPage') {
        try {
            if (req.session.username) {
                let name = req.session.username;
                let password = req.session.password;
                let log = await userData.login(name, password);
                if (!log) {
                    res.status(401).render("page/error", {
                        error: "No any matched user!"
                    });
                    return;
                } else {
                    res.render("page/mainPage", log);
                }

            } else {
                res.status(403).render("page/error", {
                    error: "no login information!"
                });
            }
        } catch (errorMessage) {
            res.status(500).json({
                error: errorMessage
            });
        }
    } else {
        next();
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

// router.use(function (req, res, next){
//     if(req.url === '/signup'){
//         try{
//             if(req.session.username === null)
//         }
//     }
// })

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