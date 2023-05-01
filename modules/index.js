import Book from './book.js';
import Books from './books.js';
import Library from './library.js';

function displayBooks() {
  const bookListDiv = document.querySelector('.book-list');
  bookListDiv.innerHTML = '';
  const bookList = document.createElement('ul');

  Books.forEach((book, index) => {
    // console.log(index);
    const li = document.createElement('li');
    li.setAttribute('id', book.id);
    li.innerHTML = `
      <p><b>"${book.title}"</b> by ${book.author}</p>
      <button class="remove-btn">Remove</button>
    `;

    if (index % 2 === 0) {
      li.classList.add('dark');
    } else {
      li.classList.add('light');
    }

    li.querySelector('.remove-btn').addEventListener('click', () => {
      // Remove the book from the Books array
      const bookIndex = Books.indexOf(book);
      console.log(bookIndex);
      if (bookIndex !== -1) {
        Books.splice(bookIndex, 1);
        const library = new Library(book);
        library.removeBook();
      }

      // Remove the book from the DOM
      li.remove();
      displayBooks();
    });

    bookList.appendChild(li);
  });

  bookListDiv.appendChild(bookList);
}

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('book-title').value;
  // Capitalize first letter of title value
  const titleUC = title.charAt(0).toUpperCase() + title.slice(1);
  const author = document.getElementById('book-author').value;
  const arrAuthor = author.split(' ');
  // Capitalize first letter of each word of author value
  for (let i = 0; i < arrAuthor.length; i += 1) {
    arrAuthor[i] = arrAuthor[i].charAt(0).toUpperCase() + arrAuthor[i].slice(1);
  }
  const authorUC = arrAuthor.join(' ');
  if ((title && author) !== '') {
    const book = new Book(titleUC, authorUC);
    const library = new Library(book);
    library.addBook();
    form.reset();
    displayBooks();
  }
});

// NAVBAR LINKS

// List - Link
const bookList = document.querySelector('.book-list-container');
const listBtn = document.querySelector('.navList');
const formContainer = document.querySelector('.form');
// Add New - Link
const addNewBtn = document.querySelector('.navNew');
// Contact - Link
const contactBtn = document.querySelector('.navContact');
const contactInfo = document.querySelector('.contact');

function showList() {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
  displayBooks();
}

listBtn.addEventListener('click', showList);

addNewBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'block';
  contactInfo.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'block';
});

const currentDate = new Date().toLocaleString('default', {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
});
document.getElementById('date').innerHTML = currentDate;

showList();
