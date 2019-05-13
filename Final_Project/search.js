const axios = require('axios');

//Search by Title, Author, Publisher, Genre

async function getTitleByID(){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');
    
    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (id == null || id == undefined || id <= 0 || id > data.length || typeof id != 'number'){
        throw "Error! Invalid ID!"
    }

    return data[id].Title;
}

async function getAuthorFirstNameById(){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');
    
    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (id == null || id == undefined || id <= 0 || id > data.length || typeof id != 'number'){
        throw "Error! Invalid ID!"
    }

    return data[id].Author_FirstName;
}

async function getAuthorLastNameById(id){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (id == null || id == undefined || id <= 0 || id > data.length || typeof id != 'number'){
        throw "Error! Invalid ID!"
    }

    return data[id].Author_LastName; 
}

async function getAuthorById(id){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (id == null || id == undefined || id <= 0 || id > data.length || typeof id != 'number'){
        throw "Error! Invalid ID!"
    }

    return data[id].Author_FirstName + ' ' + data[id].Author_LastName;
}

async function getPublisherById(id){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (id == null || id == undefined || id <= 0 || id > data.length || typeof id != 'number'){
        throw "Error! Invalid ID!"
    }

    return data[id].Publisher; 
}

async function getPublishedById(id){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (id == null || id == undefined || id <= 0 || id > data.length || typeof id != 'number'){
        throw "Error! Invalid ID!"
    }

    return data[id].Published; 
}

async function getGenreById(id){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (id == null || id == undefined || id <= 0 || id > data.length || typeof id != 'number'){
        throw "Error! Invalid ID!"
    }

    return data[id].Genre; 
}

async function getIdByTitle(title){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (title == null || title == undefined || typeof title != 'string'){
        throw "Error! Invalid Title!"
    }

    var validId;
    for (var i = 1; i < data.length; i++){
        if (data[i].Title === title){
            validId = data[i].id;
            return validId;
        }
    }

    throw "Error! ID not found!";
}

async function getAuthorLastNameByTitle(title){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (title == null || title == undefined || typeof title != 'string'){
        throw "Error! Invalid Title!"
    }

    var validAuthor;
    for (var i = 1; i < data.length; i++){
        if (data[i].Title === title){
            validAuthor = data[i].Author_LastName;
            return validAuthor;
        }
    }

    throw "Error! Author not found!";
}

async function getAuthorFirstNameByTitle(title){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (title == null || title == undefined || typeof title != 'string'){
        throw "Error! Invalid Title!"
    }

    var validAuthor;
    for (var i = 1; i < data.length; i++){
        if (data[i].Title === title){
            validAuthor = data[i].Author_FirstName;
            return validAuthor;
        }
    }

    throw "Error! Author not found!";
}

async function getAuthorByTitle(title){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (title == null || title == undefined || typeof title != 'string'){
        throw "Error! Invalid Title!"
    }

    try {
        var validAuthorLastName = getAuthorLastNameByTitle(title);
        var validAuthorfirstName = getAuthorFirstNameByTitle(title);
    } catch (e) {
        throw "Error! Author not found!";
    }
    
    var validAuthor = validAuthorfirstName + validAuthorLastName;
    return validAuthor;
}

async function getPublisherByTitle(title){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (title == null || title == undefined || typeof title != 'string'){
        throw "Error! Invalid Title!"
    }

    var validPublisher;
    for (var i = 1; i < data.length; i++){
        if (data[i].Title === title){
            validPublisher = data[i].Publisher;
            return validPublisher;
        }
    }

    throw "Error! Publisher not found!";
}

async function getGenreByTitle(title){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (title == null || title == undefined || typeof title != 'string'){
        throw "Error! Invalid Title!"
    }

    var validGenre;
    for (var i = 1; i < data.length; i++){
        if (data[i].Title === title){
            validGenre = data[i].Genre;
            return validGenre;
        }
    }

    throw "Error! Genre not found!";
}

async function getIdByPublisher(publisher){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (publisher == null || publisher == undefined || typeof publisher != 'string'){
        throw "Error! Invalid Publisher!"
    }

    var validId;
    for (var i = 1; i < data.length; i++){
        if (data[i].Publisher === publisher){
            validId = data[i].id;
            return validId;
        }
    }

    throw "Error! ID not found!";
}

async function getIdByGenre(genre){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (genre == null || genre == undefined || typeof genre != 'string'){
        throw "Error! Invalid Genre!"
    }

    var validId;
    for (var i = 1; i < data.length; i++){
        if (data[i].Genre === genre){
            validId = data[i].id;
            return validId;
        }
    }

    throw "Error! ID not found!";
}

async function getIdByPublished(published){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (published == null || published == undefined || typeof published != 'number' || published > 2019){
        throw "Error! Invalid Date of Publication!"
    }

    var validId;
    for (var i = 1; i < data.length; i++){
        if (data[i].Published === published){
            validId = data[i].id;
            return validId;
        }
    }

    throw "Error! ID not found!";
}

async function getIdByAuthor(author){
    const { data } = await axios.get('https://github.com/somemonster/CS546-Final/blob/master/Final_Project/data/books.json');

    if (arguments.length <= 0 || arguments.length > 1){
        throw "Error! Invalid number of arguments!"
    }
    if (author == null || author == undefined || typeof author != 'string'){
        throw "Error! Invalid Author!"
    }

    var validId;
    for (var i = 1; i < data.length; i++){
        if (data[i].Author_FirstName === author){
            validId = data[i].id;
            return validId;
        }
        else if (data[i].Author_LastName === genre){
            validId = data[i].id;
            return validId;
        }
    }

    throw "Error! Author not found!";
}

module.exports = {
getAuthorById,
getAuthorByTitle,
getAuthorFirstNameById,
getAuthorFirstNameByTitle,
getAuthorLastNameById,
getAuthorLastNameByTitle,
getGenreById,
getGenreByTitle,
getIdByAuthor,
getIdByGenre,
getIdByPublished,
getIdByPublisher,
getIdByTitle,
getPublishedById,
getPublisherById,
getPublisherByTitle,
getTitleByID
}