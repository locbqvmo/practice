// Array.slice

const number = [1, 2, 3, 4, 5, 6]
const copy = number.slice();
console.log(copy)

// Spread Operator
const number = [1, 2, 3, 4, 5, 6];
const copy = [...number];
console.log(copy);

// Destructuring
const number = [1, 2, 3, 4, 5, 6];
const [...rest] = number
console.log(rest);

// Array.concat

const number = [1, 2, 3, 4, 5, 6];
const copy = number.concat();
console.log(copy);

// Array.from

const number = [1, 2, 3, 4, 5, 6];
const copy = Array.from(new Set(number));
console.log(copy);

// Array.push vs Spread Operator

const number = [1, 2, 3, 4, 5, 6];
const copy = [];
copy.push(...number);
console.log(copy);

// Array of

const number = [1, 2, 3, 4, 5, 6];
const copy = Array.of(...number);
console.log(copy);

// Spread

const objcet = {
    name: "Nguyen Thi My",
    age: 20
}
const copyObject = {...objcet }
console.log(copyObject);

// Object.assign
const objcet = {
    name: "Nguyen Thi My",
    age: 20
}
const copyObject = Object.assign({}, objcet);
console.log(copyObject);

// Promise
function myPromise() {
    return new Promise((resolve, reject) => {
        const question = confirm('True or False');
        if (question) {
            return resolve("True");
        } else {
            return reject("False");
        }
    })
}
myPromise().then((message) => {
    console.log("This is", message);
}).catch((error) => {
    console.log("This is", error);
})

// Async / Await

const getApi = async() => {
    const respone = await fetch("https://610f7403c848c900171b38d8.mockapi.io/products/product");
    const data = await respone.json();
    console.log(data);
}
getApi();

//callback

function asyncCallback(callback) {
    console.log("Start");
    setTimeout(() => {
        callback();
    }, 1000);
    console.log("Waiting");
}

let printEnd = function() {
    console.log("End");
}

asyncCallback(printEnd)