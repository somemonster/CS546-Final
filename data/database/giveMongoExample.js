const bookData = require("./storeBooks");
// const RecData = require("./Recommendation");
// const comData = require("./comments");43
async function dojj() {
    await bookData.CreateBook("A Song of Ice and Fire", "/covers/IceandFireCover.jpg", "George", "Martin", "Bantam Books", "Fantasy", 1, 1996);
    await bookData.CreateBook("The Great Gatsby", "covers/GatsbyCover.jpg", "F. Scott", "Fitzgerald", "Charles Scribner's Sons", "Historical Fiction", 1, 1925);
    await bookData.CreateBook("The Grapes of Wrath", "covers/GrapesCover.jpg", "John", "Steinbeck", "The Viking Press", "Historical Fiction", 1, 1939);
    await bookData.CreateBook("Nineteen Eighty-Four","covers/1984Cover.jpg", "George", "Orwell", "Secker & Warburg", "Science Fiction", 1, 1949);
    await bookData.CreateBook("Ulysses", "covers/UlyssesCover.jpg", "James", "Joyce", "Sylvia Beach", "Literary Fiction", 1, 1922);
    await bookData.CreateBook("Lolita", "covers/LolitaCover.jpg", "Vladimir", "Nabokov", "Olympia Press", "Romance", 1, 1955);
    await bookData.CreateBook("Catch-22", "covers/Catch22Cover.jpg", "Joseph", "Heller", "Simon & Schuster", "Historical Fiction", 1, 1961);
    await bookData.CreateBook("The Catcher in the Rye", "covers/RyeCover.jpg", "J.D.", "Sallinger", "Little, Brown and Company", "Young Adult", 1, 1951);
    await bookData.CreateBook("To Kill a Mockingbird", "covers/MockingbirdCover.jpg", "Harper", "Lee", "J.B. Lippincott & Co.", "Fiction", 1, 1960);
    await bookData.CreateBook("The Lord of the Rings", "covers/LOTRCover.jpg", "J. R. R.", "Tolkien", "Allen & Unwin", "Fantasy", 1, 1954);
    await bookData.CreateBook("Gone with the Wind", "covers/WindCover.jpg", "Margaret", "Mitchell", "Macmillan Publishers", "Historical Fiction", 1, 1936);
    await bookData.CreateBook("Pride and Prejudice", "covers/PrideCover.jpg", "Jane", "Austen", "T. Egerton", "Romance", 1, 1813);



    
    await bookData.CreateBook("Gulliver's Travels into Several Remote Nations of the World", "Jonathan", "Swift", "Bob", "Historical Fiction", 1, 2008);
    await bookData.CreateBook("The Vampyre", "John William", "Polidori", "Bill", "Horror", 1, 2007);
    await bookData.CreateBook("The Strange Case of Dr Jekyll and Mr. Hyde Study Guide 3", "James", "Del Mcjones", "Diao", "Horror", 1, 1994);
    await bookData.CreateBook("Antic Hay", "Aldous", "Huxley", "William", "Psychology", 1, 2007);
    await bookData.CreateBook("Poems", "Victor", "Hugo", "Mike", "Poetry", 1, 1999);
    
    
    
    
    
    
    
    await bookData.CreateBook("Lord of the Flies", "William", "Golding", "Faber and Faber", "Literary Fiction", 1, 1954);
    await bookData.CreateBook("Wuthering Heights", "Emily", "Bronte", "Thomas Cautley Newby", "Romance", 1, 1847);
    await bookData.CreateBook("Slaughterhouse-Five", "Kurt", "Vonnegut", "Delacorte", "Science Fiction", 1, 1969);
    await bookData.CreateBook("Of Mice and Men", "John", "Steinbeck", "Covici Friede", "Historical Literary", 1, 1937);
    await bookData.CreateBook("Moby-Dick", "Herman", "Melville", "Richard Bentley", "Adventure", 1, 1851);
    await bookData.CreateBook("The Hichhiker's Guide to the Galaxy", "Douglas", "Adams", "Pan Books", "Science Fiction", 1, 1979);
    await bookData.CreateBook("The Hobbit", "J. R. R.", "Tolkien", "Allen & Unwin", "Fantasy", 1, 1937);
    await bookData.CreateBook("A Clockwork Orange", "Anthony", "Burgess", "William Heinemann", "Science Fiction", 1, 1962);
    await bookData.CreateBook("Adventures of Huckleberry Finn", "Mark", "Twain", "Chatto & Windus", "Young Adult", 1, 1884);
    await bookData.CreateBook("The Life and Adventures of Robinson Crusoe", "Daniel", "Defoe", "William Taylor", "Adventure", 1, 1719);
    await bookData.CreateBook("The Bell Jar", "Sylvia", "Plath", "Heinemann", "Poetry", 1, 1963);
    await bookData.CreateBook("One Flew Over the Cuckoo's Nest", "Ken", "Kesey", "Viking Press", "Psychology", 1, 1962);
    await bookData.CreateBook("Strange Case of Dr. Jekyll and Mr. Hyde", "Robert Louis", "Stevenson", "Longmans, Green & Co.", "Horror Story", 1, 1886);
    await bookData.CreateBook("It", "Stephen", "King", "Viking Press", "Horror Story", 1, 1986)
};
dojj();