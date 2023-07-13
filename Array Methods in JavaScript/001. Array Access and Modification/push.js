const books = [];

// Add new books to the collection
const addBook = (titleVal, authorVal) => {
  const book = { title: titleVal, author: authorVal };
  books.push(book);
};

addBook("The Great Gatsby", "F. Scott Fitzgerald");
addBook("To Kill a Mockingbird", "Harper Lee");

console.log(books);
