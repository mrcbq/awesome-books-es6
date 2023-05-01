import Books from './books.js';

export default class Library {
  constructor(book) {
    this.book = book;
  }

  addBook() {
    Books.push(this.book);
    localStorage.setItem('Books', JSON.stringify(Books));
  }

  removeBook() {
    let books = [];
    books = Books.filter((bookObj) => bookObj.id !== this.book.id);
    Books.length = 0;
    Books.push(...books);
    localStorage.setItem('Books', JSON.stringify(Books));
  }
}
