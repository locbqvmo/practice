
//============ TASK 1 ===============

// === Copy Array ===

const arr = [1,2,3,4,5];

// Array.slice
const arr1 = arr.slice();
arr1.push(6);
console.log(arr1); // [1,2,3,4,5,6]

// Spread Operator
const arr2 = [...arr];
arr2.push('linh');
console.log(arr2); // [ 1, 2, 3, 4, 5, 'linh' ]

// Array.map

const arr3 = arr.map( (num) => num )
arr3.push('map');
console.log(arr3); //[ 1, 2, 3, 4, 5, 'map' ]

// new Array and Spread Operator

const arr4 = new Array (...arr);
arr4.push('new array and spread Operator')
console.log(arr4) // [ 1, 2, 3, 4, 5, 'new array and spread Operator' ]

// Destructuring
 const [...arr5] = arr;
 arr5.push('Destructuring');
 console.log(arr5);


 // Array.concat
const arr6 = arr.concat();
arr6.push('concat');
console.log(arr6);

// using for loop
const arr7 = [];
for(let i = 0; i<arr.length; i++){
    arr7[i] = arr[i]
}
arr7.push('for loop')
console.log(arr7)

//using while() loop
const arr8 = [];
let i = -1;
 while (++i < arr.length){
     arr8[i] = arr[i]
 }
arr8.push('while loop');
console.log(arr8);

//Array.filter
const arr9 = arr.filter( x => x);
arr9.push('filter');
console.log(arr9);

//Array.forEach
let arr10 = []
arr.forEach((num) => arr10.push(num));
arr10.push('forEach');
console.log(arr10)


// === Copy Object ===

const obj = {
    name: 'Copy Object',
}

// Spread Operator
const obj1 = {...obj};
obj1.age = 21;
console.log(obj1);

//Object.assign
const obj2 = Object.assign( {}, obj);
obj2.type = 'assign';
console.log(obj2)

//JSON

const obj3 = JSON.parse(JSON.stringify(obj))
obj3.type = 'json'
console.log(obj3)


//============= TASK 2 =============

// Callback

function callback() {
    setTimeout(() => {
        console.log('Task 1')
        setTimeout(() => {
            console.log('Task 2')
            setTimeout(() => {
                console.log('Task 3')
            },1000)
        },3000)
    },2000)
}

callback();

// Promise

let a = true;
function promise1(){
    return new Promise((resolve, reject) => {
        if(a === true){
            resolve(1)
        } else {
          reject(new Error("Erro!"))
        }
    })
}

promise1()
.then((data) => {
    console.log(` Đây là Task ${data}`)
    return ++data; 
})
.then((data) => {
    console.log(` Đây là Task ${data}`)
    return ++data;
})
.then((data) => {
    console.log(` Đây là Task ${data}`)
})
.catch((err) => {
    console.log(err)
})
.finally(() => console.log('Done'))

// asyn awit

function kichthuoc(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        },1000)
    });
 };
 
 function dthcn(a){
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a * 2);
        },2000)
    });
 };
 
 async function tinhtoan() {
     let data = await kichthuoc(3,6);
     let result =  await dthcn(data);
     console.log(`Diện tích Hình Chữ Nhật là: ${result}`)
 }
 
 tinhtoan()