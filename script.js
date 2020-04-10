/** Array of Books  */
const myLibrary = [];

/** Generate an Empty Book  */
function Book() {
  this.author = 'test';
  this.title = 'test';
  this.numberOfPages = 123;
  this.isReaded = 'on';
}

/** Render all Array Elements */
function render() {
  let counter = 1;
  myLibrary.forEach(obj => {
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('name', `book-${counter}`);
    mainContainer.setAttribute('class', 'book');
    Object.values(obj).forEach(value => {
      const spanValue = document.createElement('span');
      spanValue.innerText = value;
      mainContainer.appendChild(spanValue);
    });
    counter += 1;
    document.getElementById('display').appendChild(mainContainer);
  });
}

/** Generate first 2 values of DB  */
function seeds() {
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

/** On Load Properties  */
window.onload = () => {
  seeds();
  render();
};