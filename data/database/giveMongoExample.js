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
    await bookData.CreateBook("Lord of the Flies", "covers/FliesCover.jpg", "William", "Golding", "Faber and Faber", "Dystopia", 1, 1954);
    await bookData.CreateBook("Wuthering Heights", "covers/WutheringCover.jpg", "Emily", "Bronte", "Thomas Cautley Newby", "Romance", 1, 1847);
    await bookData.CreateBook("Slaughterhouse-Five", "covers/SH5Cover.jpg", "Kurt", "Vonnegut", "Delacorte", "Science Fiction", 1, 1969);
    await bookData.CreateBook("Of Mice and Men", "covers/MiceandMenCover.jpg", "John", "Steinbeck", "Covici Friede", "Historical Fiction", 1, 1937);
    await bookData.CreateBook("Moby-Dick", "covers/MobyDickCover.jpg", "Herman", "Melville", "Richard Bentley", "Adventure", 1, 1851);
    await bookData.CreateBook("The Hichhiker's Guide to the Galaxy", "covers/HitchCover.jpg", "Douglas", "Adams", "Pan Books", "Science Fiction", 1, 1979);
    await bookData.CreateBook("The Hobbit", "covers/HobbitCover.jpg", "J. R. R.", "Tolkien", "Allen & Unwin", "Fantasy", 1, 1937);
    await bookData.CreateBook("A Clockwork Orange", "covers/CWOCover.jpg", "Anthony", "Burgess", "William Heinemann", "Science Fiction", 1, 1962);
    await bookData.CreateBook("Adventures of Huckleberry Finn", "covers/HuckFinnCover.jpg", "Mark", "Twain", "Chatto & Windus", "Young Adult", 1, 1884);
    await bookData.CreateBook("The Life and Adventures of Robinson Crusoe", "covers/CrusoeCover.jpg", "Daniel", "Defoe", "William Taylor", "Adventure", 1, 1719);
    await bookData.CreateBook("The Bell Jar", "covers/BellCover.jpg", "Sylvia", "Plath", "Heinemann", "Poetry", 1, 1963);
    await bookData.CreateBook("One Flew Over the Cuckoo's Nest", "covers/OneFlewCover.jpg", "Ken", "Kesey", "Viking Press", "Psychology", 1, 1962);
    await bookData.CreateBook("Strange Case of Dr. Jekyll and Mr. Hyde", "covers/JandHCover.jpg", "Robert Louis", "Stevenson", "Longmans, Green & Co.", "Horror", 1, 1886);
    await bookData.CreateBook("It", "Stephen", "covers/ItCover.jpg", "King", "Viking Press", "Horror", 1, 1986)
    await bookData.CreateBook("Antic Hay", "covers/HayCover.jpg", "Aldous", "Huxley", "William", "Psychology", 1, 2007);
    await bookData.CreateBook("Poems", "covers/PoemsCover.jpg", "Victor", "Hugo", "Mike", "Poetry", 1, 1999);
    
};
dojj();