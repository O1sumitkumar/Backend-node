/// async function explanation

let a = 10;
let x;

// console.log(a + x);

// promise example

let waitForData = new Promise((res, rej) => {
  setTimeout(() => {
    x = 20;
    res(x);
    // console.log(x);
  }, 2000);
});

// console.log(a + waitForData);

waitForData.then(() => {
  console.log(a + x);
});
