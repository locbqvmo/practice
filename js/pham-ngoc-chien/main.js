// array 
const arr = [1, 2, 3, 4, 5, 6, 7];

// for in
var arr2 = [];
for(item in arr){
  arr2.push(arr[item]); //or arr2.push[item]
}
console.log(arr2)

// map
const arr3 = arr.map((item)=>item)
console.log(arr3)


//spread
const arr4 = [...arr];
console.log(arr4)

//reduce
const arr5 = arr.reduce((acc, cur)=>{
  acc.push(cur)
  return acc
}, [])
console.log(arr5)

// forEach()
let arr6 = [];
arr.forEach((item)=>{
  arr6.push(item);
})
console.log(arr6)

//concat()
const arr7 = arr.concat()
console.log(arr7)

//push.apply()
const arr8 = [];
Array.prototype.push.apply(arr8, arr)
console.log(arr8)

//push()
const arr9 = [];
arr9.push([...arr]);
console.log(arr9)

//slice
const arr10 = arr.slice()
console.log(arr10)

//flat(): The flatmethod creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr11 = arr.flat()
console.log(arr11)


//flatMap()
const arr12 = arr.flatMap((item)=>item)
console.log(arr12)

//for loop
const arr13 = [];
for (i = 0; i < arr.length; i++) {
  arr13[i] = arr[i];
}
console.log(arr13)

// while
let arr14 = [];
let item2 = -1;
while (++item2 < arr.length) {
  arr14[item2] = arr[item2] //or arr14.push(arr[item])
}
console.log(arr14)
//or
// let arr15 = [];
// let item = -1;
// while (item++ < arr.length - 1) {
//   arr15[item] = arr[item] //or arr15.push(arr[item])
// }
// console.log(arr15)

//Json
var arr16 = JSON.parse(JSON.stringify(arr))
console.log(arr16)

//Array.of()
const arr17 = Array.of([...arr])
console.log(arr17)

//Object.assign()
const arr18 = Object.assign(arr);
console.log(arr18)

//filter()
const arr19 = arr.filter((item)=>item>0)
console.log(arr19)

//---------------------- Object --------------------------

let ob = {
  id: 1,
  name: "Chiến",
  age: 21,
  hometown: "Nam Định",
  university: "Thăng Long Uni",
}

//spread
const ob1 = {...ob}
console.log(ob1)


//Object.asign()
const ob3 = Object.assign({}, ob)
console.log(ob3)

//
const ob4 = {}
ob4.id = ob.id;
ob4.name = ob.name;
ob4.age = ob.age;
ob4.hometown = ob.hometown;
ob4.university = ob.university;
console.log(ob4)

// Json
const ob5 = JSON.parse(JSON.stringify(ob))
console.log(ob5)

// for
let ob6 = {}
for(item in ob){
  ob6[item] = ob[item]
}
console.log(ob6)


//----------Promise,callback, async/awai---------------

function run(){
  return new Promise(resolve => {
      myCallback()
  })
}
async function start(){
  setTimeout(() => {
    console.log("Start")  
  }, 2000);
  const result = await run()
  return result
}
const myCallback = () => {
  var promise = new Promise((resolve, reject)=>{
      resolve()
  })
  promise
    .then(count(1, 3000))
    .then(count(2, 4000))
    .then(count(3, 5000))  
    .catch(function(err){console.log(err)})
    .finally(count("end", 6000))
}
function count(log, ms){
  setTimeout(function(){
    console.log(log)
  }, ms)
}
start()