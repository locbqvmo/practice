// QUESTION 2: Simulate handling asynchronous using callback, promise and async/await

//1) Asynchronous using callback
console.log("Asynchronous using callback");
function callbackFunction(callback) {
  console.log("123");
  callback();
}
function argument() {
  console.log("456");
}
callbackFunction(argument);

//2) Asynchronous using promise
console.log("Asynchronous using promise");
const myPromise = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
myPromise
  .then((message) => {
    console.log("Status: " + message);
  })
  .catch((error) => {
    console.log("Status: " + error);
  })
  .finally(() => {
    console.log("Done.");
  });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second promise");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third promise");
  }, 3000);
});
Promise.all([promise1, promise2, promise3]).then((allMessage) => {
  console.log("Status: " + allMessage);
});

//2) Asynchronous using async/await
console.log("Asynchronous using async/await");
const awaitFunction = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async/Await");
  }, 3000);
});
const useAsyncFunction = async () => {
  const awaitVariable = await awaitFunction;
  console.log("Await successfully");
};

useAsyncFunction();
