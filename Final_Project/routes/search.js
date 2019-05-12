const express = require("express");
const router = express.Router();
const searchData = require("../search.js");

router.post('/mainPage', async (req, res) => {

    const {search} = req.body;
  
    if (search){
        const search = users.find(user => user.username === username);
        var match;
    
        console.log(user)
        if (user){
            try {
                match = await bcrypt.compare(password, user.hashedPassword);
            } catch (e) {
                console.log(e);
            }
  
            if (match){
                res.cookie("AuthCookie");
                req.session.user = user;
                res.redirect('/private');
            }
            else {
                res.status(401).render('login', {error_message: "Enter a Valid Password",  hasErrors: true});
            }
        }
        
        else {
            res.status(401).render('login', {error_message: "Username Not Found",  hasErrors: true})
        }
    }
    
    else {
        res.status(401).render('login', {error_message: "Username or Password Not Provided",  hasErrors: true})
    }

});

router.get("/search", async (req, res) => {

    var 
    try {
        const person = await searchData.getPersonById(parseInt(req.params.id,10));
        res.json(person);
    } catch (e) {
        res.status(404).json({ message: "not found!" });
    }
});

// router.get("/search", async (req, res) => {
//   try {
//     const person = await searchData.getPersonById(parseInt(req.params.id,10));
//     res.json(person);
//   } catch (e) {
//     res.status(404).json({ message: "not found!" });
//   }
// });

module.exports = router;