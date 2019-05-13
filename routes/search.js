const express = require("express");
const router = express.Router();
const searchData = require("../search.js");

router.post('/search', async(req, res) => {

    const { search } = req.body;

    if (search) {
        const search = searchData.find(search => search === search);

        var id = [];
        var x = 0;

        console.log(search)
        if (search) {
            try {
                for (var i = 1; i < data.length; i++) {
                    if (searchData[i].Title === search) {
                        id[x] = data[i].id;
                        x++;
                        continue;
                    } else if (searchData[i].Author_FirstName === search) {
                        id[x] = data[i].id;
                        x++;
                        continue;
                    } else if (searchData[i].Author_LastName === search) {
                        id[x] = data[i].id;
                        x++;
                        continue;
                    } else if (searchData[i].Publisher === search) {
                        id[x] = data[i].id;
                        x++;
                        continue;
                    } else if (searchData[i].Genre === search) {
                        id[x] = data[i].id;
                        x++;
                        continue;
                    } else if (searchData[i].Published === search) {
                        id[x] = data[i].id;
                        x++;
                        continue;
                    } else {
                        res.status(401).render('search', { error_message: "No Result Found" });
                    }

                    if (id.length == null || id.length == undefined) {
                        res.status(401).render('search', { error_message: "No Result Found" });
                    } else {
                        return id; //returns a list of id's;
                    }

                }
            } catch (e) {
                res.status(401).render('search', { error_message: "No Result Found" });
            }
        }
        // else {
        //     res.status(401).render('search', {error_message: "Result Not Found"})
        // }
    } else {
        res.status(401).render('search', { error_message: "Please Provide Something For Search" })
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