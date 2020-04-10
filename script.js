/** Array of Books  */
const myLibrary = [];

/** Generate an Empty Book  */
function Book() {
  this.id = 1;
  this.input = 'test';
  this.title = 'test';
  this.pages = 123;
  this.isReaded = 'on';
}

/** Changes Book Status */
function changeStatus(e) {
  let { target: { id } } = e;
  id = id.split('-');
  id = Number(id.pop());
  myLibrary.forEach(obj => {
    const { id: bookId, isReaded: read } = obj;
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

function maxWidth(e) {
  let { target: { textLength, value } } = e;
  if (textLength > 4) {
    alert("Book Can't Have More than 4 digits in Pages")
    e.target.value = ''
  }
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
  b1.id = 1;
  b1.input = 'William Walker Atkinson';
  b1.title = 'Le Kybalion';
  b1.pages = 233;
  b1.isReaded = 'Readed';
  myLibrary.push(b1);

  b1 = new Book();
  b1.id = 2;
  b1.input = 'Charles Webster Leadbeater';
  b1.title = 'Occult Chemistry';
  b1.pages = 114;
  b1.isReaded = 'Readed';
  myLibrary.push(b1);
}

/** Creat a form on click  */
function formCreator() {
  const chkForm = document.getElementById('bookSubmit');
  if (!chkForm) {
    const book = new Book();
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class', 'container');
    const form = document.createElement('form');
    form.id = 'bookSubmit';
    const formTitle = document.createElement('h2');
    formTitle.innerText = 'Which Book You Want to Add?';
    form.appendChild(formTitle);
    Object.keys(book).forEach(key => {
      if (key !== 'isReaded' && key !== 'id') {
        const wrapper = document.createElement('div');
        const lbl = document.createElement('label');
        lbl.setAttribute('for', key);
        lbl.innerText = key;
        wrapper.appendChild(lbl);
        const input = document.createElement('input');
        input.setAttribute('name', key);
        if (key !== 'pages') {
          input.setAttribute('type', 'text');
        } else {
          input.setAttribute('type', 'number');
          input.oninput = maxWidth;
        }
        wrapper.appendChild(input);
        form.appendChild(wrapper);
      }
    });
    const submitDiv = document.createElement('div');
    const frmSubmit = document.createElement('button');
    frmSubmit.innerText = 'Submit';
    submitDiv.appendChild(frmSubmit);
    form.appendChild(submitDiv);
    const library = document.getElementsByClassName('container');
    mainContainer.appendChild(form);
    document.body.insertBefore(mainContainer, library[0]);
  }
}

function addBookToLibrary() {

}

/** On Load Properties  */
window.onload = () => {
  seeds();
  render();
  document.getElementById('createForm').onclick = formCreator
};