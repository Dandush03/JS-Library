const myLibrary = [];

/** Generate an Empty Book  */
function Book() {
  this.author = 'test';
  this.title = 'test';
  this.numberOfPages = 123;
  this.isReaded = 'on';
}


function render() {
  myLibrary.forEach(obj => {
    console.log(obj)
    Object.values(obj).forEach(value => {
      console.log(value)
    });
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
  console.log(myLibrary);
  render();
};
