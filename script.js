const myLibrary = [];

function Book() {
  this.author = 'test';
  this.title = 'test';
  this.numberOfPages = 123;
  this.isReaded = false;
}

function addBookToLibrary() {
  let form = document.forms['bookForm']
  //let book = new Book();
  console.log(form['author'])
  //book.author = form['author']
  //myLibrary.push(book);
}

function Seeds() {
  let b1 = new Book(); 
  b1.author = 'William Walker Atkinson';
  b1.title = 'Le Kybalion';
  b1.numberOfPages = 233;
  b1.isReaded = true;
  myLibrary.push(b1);

  b1 = new Book();
  b1.author = 'Charles Webster Leadbeater';
  b1.title = 'Occult Chemistry';
  b1.numberOfPages = 114;
  b1.isReaded = true;
  myLibrary.push(b1);
}

Seeds();

function elementCreator(parent, obj) {
  const span = document.createElement('span');
  span.appendChild(document.createTextNode(obj));
  parent.appendChild(span);
}

myLibrary.forEach(function (book, index) {
  const container = document.createElement('div');
  container.id = 'book-${(index + 1)}';

  for (var c in book) {
    elementCreator(container, book[c]);
  }
  document.getElementById('display').appendChild(container);
})