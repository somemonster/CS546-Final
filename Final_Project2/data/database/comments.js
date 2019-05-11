const mongoCollections = require("./collections");
const comments = mongoCollections.comments;
const books = require("./books");
const ObjectId = require("mongodb").ObjectID;

module.exports = {
     async addComments(newCom) {
          const commentCollection = await comments();
          const newCom = await this.getCommentsById(newCom._id);
          if(newCom ===null){
            let comInfo = {
               _id : newCom._id,
               name : newCom.name,
               comment : newCom.comment
            }
            const insertInfo = await commentCollection.insertOne(recInfo);
            if (insertInfo.insertedCount === 0) throw "can not add comment";
            await books.addArray(comInfo.author,"comment",comInfo._id);
            return insertInfo;
          }
        },

     async getCommentsById(id){
          if (!id) throw "You need give an id to search";
          if (!/^[a-fA-F0-9]{24}$/.test(id)) throw "The id need to be ObjectId";
          const _conlection = await comments();
          const _com = await _conlection.findOne({
              _id: ObjectId(id)
          });
          if (_com === null) throw "there is no comments with this id";
          return _com;
     }
}