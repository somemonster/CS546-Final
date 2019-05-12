const mongoCollection = require("../mongoCollections");
const users = mongoCollection.users;
const ObjectId = require("mongodb").ObjectID;
const bcrypt = require("bcrypt");


module.exports = {
    async createUser(username, password, Email, firstname, lastname) {
        if (!username || typeof (username) != "string") throw "The username is a must and the name need to be type of string.";
        if (!password || typeof (password) != "string") throw "The animalType is a must and need to be type of string.";
        if (!Email || typeof (Email) != "string") throw "The Email is a must and need to be type of string";
        if (!firstname || typeof (firstname) != "string") throw "The firstname is a must and need to be type of string";
        if (!lastname || typeof (lastname) != "string") throw "The lastname is a must and need to be type of string";

        let saltRounds = 16;
        let hash_password = await this.createHash(password, saltRounds);
        let newUsers = {
            username: username,
            password: password,
            Email: Email,
            firstname: firstname,
            lastname: lastname,
            hash_password: hash_password,
        }
        const _conlection = await users();
        const insertInfo = await _conlection.insertOne(newUsers);
        if (insertInfo.insertedCount == 0) throw "Can not create user";
        const newId = insertInfo.insertedId;
        const _user = await this.getUserById(newId);
        return _user;
    },

    async getUserById(id) {
        if (!id) throw "You need give an id to search";
        if (!/^[a-fA-F0-9]{24}$/.test(id)) throw "The id need to be ObjectId";
        const _conlection = await users();
        const _user = await _conlection.findOne({
            _id: ObjectId(id)
        });
        if (_user === null) throw "there is no user with this id";
        return _user;
    },

    async getUserByName(username) {
        if (!username) throw "You need give an username to search";
        if (typeof (username) !== "string") throw "You need enter the style of string";
        const _conlection = await users();
        const _user = await _conlection.findOne({
            username: username
        });
        if (_user === null) throw "there is no user with this username";
        return _user;
    },

    async judge(userName, password) {
        let _user = await this.getUserByName(userName);
        // for(let i in _user){console.log(_user[i])}
        if (_user.username == userName) {
            let hashed_password = _user.hash_password;
            // console.log(hashed_password)
            let res = bcrypt.compareSync(password, hashed_password);
            if (res) {
                return _user;
            } else {
                return false;
            }
        }
        return false;
    },

    async createHash(passwrod, saltRounds) {
        let hash = await bcrypt.hash(passwrod, saltRounds);
        return hash;
    }
}