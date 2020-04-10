/** Array of Books  */
const myLibrary = [];

/** Generate an Empty Book  */
function Book() {
  this.index = 1;
  this.author = 'test';
  this.title = 'test';
  this.numberOfPages = 123;
  this.isReaded = 'on';
}

/** Changes Book Status */
function changeStatus(e) {
  let { target: { id } } = e;
  id = id.split('-');
  id = Number(id.pop());
  myLibrary.forEach(obj => {
    const { index: bookId, isReaded: read } = obj;
    if (bookId === id) {
      const { target } = e;
      if (read === 'Readed') {
        obj.isReaded = 'Pending';
        target.innerText = 'Pending';
      } else {
        obj.isReaded = 'Readed';
        target.innerText = 'Readed';
      }
    }
  });
}

/** Render all Array Elements */
function render() {
  let counter = 1;
  myLibrary.forEach(obj => {
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('name', `book-${counter}`);
    mainContainer.setAttribute('class', 'book');
    Object.values(obj).forEach(value => {
      if (value === 'Readed' || value === 'Not Readed') {
        const btn = document.createElement('button');
        btn.innerText = value;
        btn.id = `btn-${mainContainer.getAttribute('name')}`;
        btn.onclick = changeStatus;
        const span = document.createElement('span');
        span.appendChild(btn);
        mainContainer.appendChild(span);
      } else {
        const spanValue = document.createElement('span');
        spanValue.innerText = value;
        mainContainer.appendChild(spanValue);
      }
    });
    counter += 1;
    document.getElementById('display').appendChild(mainContainer);
  });
}

/** Generate first 2 values of DB  */
function seeds() {
  let b1 = new Book();
  b1.index = 1;
  b1.author = 'William Walker Atkinson';
  b1.title = 'Le Kybalion';
  b1.numberOfPages = 233;
  b1.isReaded = 'Readed';
  myLibrary.push(b1);

  b1 = new Book();
  b1.index = 2;
  b1.author = 'Charles Webster Leadbeater';
  b1.title = 'Occult Chemistry';
  b1.numberOfPages = 114;
  b1.isReaded = 'Readed';
  myLibrary.push(b1);
}

/** Creat a form on click  */
function formCreator() {
  const book = new Book();
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('class', 'container');
  const form = document.createElement('form');
  Object.keys(book).forEach(key => {
    const wrapper = document.createElement('div');
    const lblAuthor = document.createElement('label');
    lblAuthor.setAttribute('for', key);
    lblAuthor.innerText = key;
    wrapper.appendChild(lblAuthor);
    const author = document.createElement('input');
    author.setAttribute('name', key);
    wrapper.appendChild(author);
    form.appendChild(wrapper);
  });
  const library = document.getElementsByClassName('container');
  mainContainer.appendChild(form);
  document.body.insertBefore(mainContainer, library[0]);
}

/** On Load Properties  */
window.onload = () => {
  seeds();
  render();
  formCreator()
};