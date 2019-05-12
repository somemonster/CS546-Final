const mongoCollection = require("../mongoCollections");
const books = mongoCollection.books;
const ObjectId = require("mongodb").ObjectID;

module.exports = {
    async CreateBook(Title, Author_FirstName, Author_LastName, Publisher, Genre, popular, published, averageRating) {
        if (!Title || typeof (Title) != "string") throw "The title is a must and the type of title need to be string.";
        if (!Author_FirstName || typeof (Author_FirstName) != "string") throw "Author_Firstname is a must and the type of Author_FirstName need to be a string";
        if (!Author_LastName || typeof (Author_LastName) != "string") throw "Author_LastName is a must and the type of Autho_LastName need to be string.";
        if (!Publisher || typeof (Publisher) != "string") throw "Publisher is a must and the type of Publisher need to be string.";
        if (!Genre || typeof (Genre) != "string") throw "Genre is a must and the type of Genre need to be string.";
        if (!popular || typeof (popular) != "number") throw "popular is a must and the type of popluar need to be number";
        if (!published || typeof (published) != "number") throw " published is a must and the type of published need to be number";

        let newbook = {
            Title: Title,
            Author_FirstName: Author_FirstName,
            Author_LastName: Author_LastName,
            Publisher: Publisher,
            Genre: Genre,
            popular: popular,
            published: published,
            averageRating: averageRating,
            Rating: [],
            Recommendations: [],
            Comments: []
        }
        const _conlection = await books();
        const insertInfo = await _conlection.insertOne(newbook);
        if (insertInfo.insertedCount == 0) throw "Can not create user";
        const newId = insertInfo.insertedId;
        const _book = await this.getBookById(newId);
        return _book;

    },

    async getBookById(id) {
        if (!id) throw "You need give an id to search";
        if (!/^[a-fA-F0-9]{24}$/.test(id)) throw "The id need to be ObjectId";
        const _conlection = await books();
        const _book = await _conlection.findOne({
            _id: ObjectId(id)
        });
        if (_book === null) throw "there is no book with this id";
        return _book;
    },

    async getBookByTitle(title) {
        if (!title) throw "You need give an title to search.";
        if (!/[^a-fA-F]{50}$/.test(title)) throw "The title need to be characters.";
        const _conlection = await books();
        const _book = await _conlection.findOne({
            Title: title
        });
        if (_book === null) throw "There is no book with this id.";
        return _book;
    },

    async getBookbyGenre(Genre){
        if(!genre) throw "You need give an genre to search.";
        if(!/[^a-fA-F]{50}$/.test(Genre)) throw "The genre need to be characters.";
        const _conlection = await books();
        const _book = await _conlection.findOne({
            Genre:Genre
        });
        if (_book === null) throw "There is no book with this genre";
        return _book;
    },

    async getFamiliar(book){
        if(!book.Genre) throw "You need give an genre to search.";
        //if(!/[^a-fA-F]{50}$/.test(book.Genre)) throw "The genre need to be characters.";
        const _conlection =await books();
        const _book = await _conlection.findOne(
            //{Genre:book.Genre},
            //{_id:{$not:book._id}}
            {$and:[{Genre:book.Genre},{_id:{$ne:book._id}}]}
        )
        //console.log(_conlection)
        //console.log(book)
        //console.log(_book)
        if(_book===null)throw "There is no book with this genre"
        return _book;
      },

    async addArray(id, key, value) {
        if (!id) throw "You need to give an id";
        if (!key) throw "You need to give an newName for book";
        if (!value) throw "You need to give an newType for book";
        if (!/^[a-fA-F0-9]{24}$/.test(id)) throw "The id need to be ObjectId";
        const _conlection = await books();
        const _book = await this.getBookById(id);

        let setKey = {};
        if (key === "recommendation") {
            _book.likes.push(value);
            setKey[key] = _book.Recommendations;
        } else {
            _book.posts.push(value);
            setKey[key] = _book.Comments;
        }
        let updateAnimal = {
            $set: setKey
        };
        const updateInfo = await _conlection.updateOne({
            _id: ObjectId(id)
        }, updateAnimal);
    },

    async updateRating(id, rating) {
        if (!id) throw "You need to give an id";
        if (!/^[a-fA-F0-9]{24}$/.test(id)) throw "The id need to be ObjectId";
        if (!rating || typeof rating != "string") throw "You need to give a new rating and the type of rating need to be string";

        const _conlection = await books();
        var bookRating = await this.getBookById(id);
        bookRating.Rating.push(parseInt(rating));
        let updateRating = {
            $set: {
                "Rating": bookRating.Rating
            }
        };

        const updateInfo = await _conlection.updateOne({
            _id: ObjectId(id)
        }, updateRating);

        if (updateInfo.updatedCount == 0) throw " update rating unsuccessfully";

        return await this.getBookById(id);

    },

    async select(id) {
        // console.log(id)
        switch (id) {
            case "newbooks":    
                return await this.sortNewBooks();
            case "popularBooks":    
                return await this.sortPopularBooks();
            case "average":     
                return await this.sortRating();
        }
    },

    async sortNewBooks() {
        const _conlection = await books();
        return await _conlection.find({}, {
            "Title": 1
        }).sort({
            "published": -1
        }).toArray();
    },

    async sortPopularBooks() {
        const _conlection = await books();
        return await _conlection.find({}, {
            "Title": 1
        }).sort({
            "popular": -1
        }).toArray();
    },

    async findSearch(text){ 
        const _conlection = await books();
        var arr2 = await _conlection.find({}).toArray();
        for(var i = 0; i < arr2.length; i++){
            if(arr2[i].Title == text){
                return arr2[i];
            }else if(arr2[i].Author_FirstName == text){
                return arr2[i];
            }else if(arr2[i].Author_LastName == text){
                return arr2[i];
            }else if((arr2[i].Author_FirstName + arr2[i].Author_LastName) == text){
                return arr2[i];
            }else if(arr2[i].Publisher == text){
                return arr2[i];
            }else if(arr2[i].Genre == text){
                return arr2[i];
            }
        }
      },

    async sortRating() {
        const _conlection = await books();
        var arr1 = await _conlection.find({}).toArray();
        for (var i = 0; i < arr1.length; i++) {
            var sum = 0;
            for (var j = 0; j < arr1[i].Rating.length; j++) {
                sum += arr1[i].Rating[j];
            }
            var averageSum = sum / arr1[i].Rating.length;
            let updateAverage = {
                $set:{
                    "averageRating" : averageSum
                }
            }
            const updateInfo = await _conlection.updateOne({
                _id: ObjectId(arr1[i]._id)
            }, updateAverage);
            if (updateInfo.updatedCount == 0) throw " update averageRating unsuccessfully";
        }
        return await _conlection.find({}, {
            "Title": 1
        }).sort({
            "averageRating": -1
        }).toArray();
    },

    async getId() {
        const _conlection = await books();
        return await _conlection.find({}, {
            "id": 1
        }).toArray();
    },

    async getAll() {
        const _conlection = await books();
        return await _conlection.find({}).toArray();
    }
}