const myLibrary = [];

/** Generate an Empty Book  */
function Book() {
  this.author = 'test';
  this.title = 'test';
  this.numberOfPages = 123;
  this.isReaded = 'on';
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
function render() {
  myLibrary.forEach(function(book, index) {
    const container = document.createElement('div');
    container.id = `book-${(index + 1)}`;
    
    document.getElementById('display').appendChild(container);
  });
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
};
