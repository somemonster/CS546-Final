let users = require("../database/user");
const bcrypt = require("bcrypt");

let judge = async function(userName, password){
     for(let i in users){
          if(users[i].username == userName){
               let res = bcrypt.compareSync(password, users[i].Hashed_Password);
               if(res){
                    return users[i];
               }else{
                    return false;
               } 
          }
     }
     return false;
}

module.exports = judge;
