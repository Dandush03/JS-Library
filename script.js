const myLibrary = [];

/** Generate an Empty Book  */
function Book() {
  this.author = 'test';
  this.title = 'test';
  this.numberOfPages = 123;
  this.isReaded = 'on';
}

function elementCreator(parent, obj) {
  let span = document.createElement('span');
  span.appendChild(document.createTextNode(obj));
  parent.appendChild(span);
}

function rowCreator(book, index) {
  const container = document.createElement('div');
  container.id = `book-${(index + 1)}`;
  for (const c in book) {
    if (book[c] != null) {
      elementCreator(container, book[c]);
    } else {
      myLibrary.pop(book);
      rowCreator(book, index)
    }
  }
  document.getElementById('display').appendChild(container);
}

/** Nest all array element inside the div */
function render() {
  let i = 0;
  for (const obj in myLibrary) {
    rowCreator(myLibrary[obj],i);
    i++;
  }
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


window.onload = () => {
  seeds();
  render();
  const form = document.getElementById('bookForm');
  form.addEventListener('submit', addBookToLibrary);
};
