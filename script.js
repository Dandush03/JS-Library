const myLibrary = [];

/** Generate an Empty Book  */
function Book() {
  this.author = 'test';
  this.title = 'test';
  this.numberOfPages = 123;
  this.isReaded = 'on';
}

/** Add Book to Array  */
function addBookToLibrary() {
  console.log(myLibrary);
  const form = document.forms.bookForm;
  const book = new Book();
  book.author = form.author.value;
  book.title = form.title.value;
  book.numberOfPages = form.pages.value;
  book.isReaded = form.readed.value;
  myLibrary.push(book);
  console.log(myLibrary);
  const mainContainer = document.getElementById('display');
  form.reset();
  mainContainer.innerHTML = '';
  createBookLibrary();
}

/** Generate first 2 values of DB  */
function seeds() {
  let b1 = new Book();
  b1.author = 'William Walker Atkinson';
  b1.title = 'Le Kybalion';
  b1.numberOfPages = 233;
  b1.isReaded = 'on';
  myLibrary.push(b1);

  b1 = new Book();
  b1.author = 'Charles Webster Leadbeater';
  b1.title = 'Occult Chemistry';
  b1.numberOfPages = 114;
  b1.isReaded = 'on';
  myLibrary.push(b1);
}

/** Create the childElement
 * @param {Object} parent The Parent element of current Node.
 * @param {Object} obj The Future Child element of current Node.
 */
function elementCreator(parent, obj) {
  const span = document.createElement('span');
  span.appendChild(document.createTextNode(obj));
  parent.appendChild(span);
}

/** Nest all array element inside the div */
function createBookLibrary() {
  myLibrary.forEach(function(book, index) {
    const container = document.createElement('div');
    container.id = `book-${(index + 1)}`;
    for (const c in book) {
      if (book[c] != null) {
        elementCreator(container, book[c]);
      } else {
        myLibrary.pop(book);
        createBookLibrary();
      }
    }

    document.getElementById('display').appendChild(container);
  });
}

window.onload = () => {
  seeds();
  createBookLibrary();
  const form = document.getElementById('bookForm');
  form.addEventListener('submit', addBookToLibrary);
};

