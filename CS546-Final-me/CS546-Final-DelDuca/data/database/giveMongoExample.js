const bookData = require("./storeBooks");
// const RecData = require("./Recommendation");
// const comData = require("./comments");43
async function dojj(){
     await bookData.CreateBook("A Song of Ice and Fire","George","Martin","John Doe","High Fantasy", 1, 2000,1);
     await bookData.CreateBook("The Problems of Philosophy", " Bertrand", "Russell", "Jack", "Fiction", 1, 2010, 1);
     await bookData.CreateBook("Gulliver's Travels into Several Remote Nations of the World", "Jonathan", "Swift", "Bob", "Fiction CLaasic", 1, 2008, 1);
     await bookData.CreateBook("The Vampyre", "John William", "Polidori", "Bill", "Horror", 1, 2007,1);
     await bookData.CreateBook("The Strange Case of Dr Jekyll and Mr. Hyde Study Guide 3", "James", "Del Mcjones", "Diao", "Horror Classic", 1, 1994,1);
     await bookData.CreateBook("Antic Hay", "Aldous", "Huxley", "William", "Humor", 1, 2007,1);
     await bookData.CreateBook("Poems", "Victor", "Hugo", "Mike", "Poetry", 1, 1999,1);
};
dojj();