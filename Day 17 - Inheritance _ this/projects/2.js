// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts

class CatObject {
  constructor(){
    this.tiredness = 0;
    this.hunger = 0 ;
    this.lonliness = 0;
    this.happiness = 0;
  }

  increaseTiredness(){
    return ++this.tiredness;
  }
  increaseHunger(){
    return ++this.hunger;
  }
  increaseLonliness(){
    return ++this.lonliness;
  }
  increaseHappiness(){
    return ++this.happiness;
  }
}
var cat = new CatObject();


// 2nd
// An object-oriented book-list!

// Create a class BookList
// Create another class called Book
class BookList{
  constructor(book, ){
    this.read = 0;
    this.notRead = 0;
    this.bookToRead = 0;
    this.currentBook = "";
    this.lastBook = "";
    this.bookArray = [];
  }
  addBook(book){
    return this.bookArray.push(book);
  }

  
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books
}

class Book{
  constructor(title, genre, author, readDate){
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.ReadDate = "";
  }
  
}

// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Genre
  // Author
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books