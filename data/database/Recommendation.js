const mongoCollections = require("./collections");
const recommendation = mongoCollections.Recommendation;
const books = require("./books");
const ObjectId = require("mongodb").ObjectID;

module.exports = {
     async addRecommendation(newRecommendation) {
          const recommendationCollection = await recommendation();
          const newRec = await this.geRecommendationById(newRecommendation._id);
          if(newRec ===null){
            let recInfo = {
               _id : newRecommendation._id,
               Title : newRecommendation.Title,
               Author_FirstName : newRecommendation.Author_FirstName,
               Author_LastName : newRecommendation.Author_LastName,
               Publisher : newRecommendation.Publisher,
               Genre : newRecommendation.Genre,
               Rating : newRecommendation.Rating
            }
            const insertInfo = await recommendationCollection.insertOne(recInfo);
            if (insertInfo.insertedCount === 0) throw "can not add comment";
            await books.addArray(recInfo.author,"recommendation",recInfo._id);
            return insertInfo;
          }
        },

     async getRecommendationById(id){
          if (!id) throw "You need give an id to search";
          if (!/^[a-fA-F0-9]{24}$/.test(id)) throw "The id need to be ObjectId";
          const _conlection = await recommendation();
          const _rec = await _conlection.findOne({
              _id: ObjectId(id)
          });
          if (_rec === null) throw "there is no recommendation with this id";
          return _rec;
     }
}