const mongoCollection = require("../mongoCollections");
const books = mongoCollection.books;
const ObjectId = require("mongodb").ObjectID;

module.exports = {
     async CreateBook(Title, Author_FirstName, Author_LastName, Publisher, Genre, Rating){
          if(!Title || typeof(Title) != "string") throw "The title is a must and the type of title need to be string.";
          if(!Author_FirstName || typeof(Author_FirstName) != "string") throw "Author_Firstname is a must and the type of Author_FirstName need to be a string";
          if(!Author_LastName || typeof(Author_LastName) != "string") throw "Author_LastName is a must and the type of Autho_LastName need to be string.";
          if(!Publisher || typeof(Publisher) != "string") throw "Publisher is a must and the type of Publisher need to be string.";
          if(!Genre || typeof(Genre) != "string") throw "Genre is a must and the type of Genre need to be string.";
          if(!Rating || typeof(Rating) != "number") throw "Rating is a must and the type of Rateing need to be number.";

          let newbook = {
               Title : Title,
               Author_FirstName : Author_FirstName,
               Author_LastName : Author_LastName,
               Publisher : Publisher,
               Genre : Genre,
               Rating : Rating,
               Recommendations : [],
               Comments : []
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

      async getBookByTitle(title){
          if(!title) throw "You need give an title to search.";
          if(!/[^a-fA-F]{50}$/.test(title)) throw "The title need to be characters.";
          const _conlection = await books();
          const _book = await _conlection.findOne({
              Title : title
          });
          if(_book === null) throw "There is no book with this id.";
          return _book;
      },

      async addArray(id, key, value){
          if(!id) throw "You need to give an id";
          if(!key) throw "You need to give an newName for book";
          if(!value) throw "You need to give an newType for book";
          if(!/^[a-fA-F0-9]{24}$/.test(id)) throw "The id need to be ObjectId";
          const _conlection = await books();
          const _book = await this.getBookById(id);
         
          let setKey = {};
          if(key === "recommendation"){
              _book.likes.push(value);
              setKey[key] = _book.Recommendations;
          }else{
              _book.posts.push(value);
              setKey[key] = _book.Comments;
          }       
          let updateAnimal = { $set:setKey};   
          const updateInfo = await _conlection.updateOne({_id: ObjectId(id)}, updateAnimal);
      },

    //   async getRatingByTitle(Title){
    //     if(!Title) throw "You need to give a title.";
    //     if(!/^[a-zA-Z]{50}$/.test(Title)) throw "The title need to be character.";
    //     const _conlection = await books();
    //     const _book = await _conlection.findOne({
    //         Title : Title
    //     })
    //     if(_book === null) throw "There is no book with this Title.";
    //     return _book.Rating;
    //   }
    async sortRating(){
        const _conlection = await books();
        return await _conlection.find({},{"Title":1}).sort({"Rating" : -1}).toArray();
    },

    async getId(){
        const _conlection = await books();
        return await _conlection.find({}, {"id" :1}).toArray();
    } 
}