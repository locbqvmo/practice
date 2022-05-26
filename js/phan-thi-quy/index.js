/* Show difference ways of copy or clone an array or an object
*/

/* *************object:*****************/
const info = {
  name: 'quy',
  age: 23
}
// Object.assign ()
const cpByAssign= Object.assign({}, info)
//spread
const cpBySpread = { ...info }
// assign value
const cpByAssignValue = info
//JSON.stringify (object)
const cpByJson = JSON.parse(JSON.stringify(info));


/****************Array**************/
const arr = ['quy', "quynh", 'anh'];
 
//spread
const cpBySpreadArr = [...arr];

//map
const cpByMapArr = arr.map(item=>item);
//filter
const cpByFilterArr = arr.filter(()=> true;
//slice
const cpBySlice = arr.slice(0,1);

//json.stringify
const cpByjson = JSON.parse(JSON.stringify(arr));
//loop for/while
cpByForArr = [];

for (i = 0; i < arr.length; i++) {
  cpByForArr[i] = arr[i];
}
//from
cpByFromArr = Array.from(numbers);


// Simulate handling asynchronous using callback, promise and async/await

//callback
function bar(){
  console.log("bar")
}
function foo(bar){
  console.log("foo")
  bar()
}
foo(bar)

// promise
// declare
let promise = new Promise(function(resolve, reject) { // tương đương với ngỏ lời yêu

})

// ex:
// Định nghĩa một hàm fake lấy dữ liệu bất đồng bộ dùng Promise
function fetchData(url){
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      const data = Math.random();
      if(data > 0.5){
        resolve(data);
      }else{
        reject("Thất bại");
      }
    }, 3000)
  })
}
// Thực thi hàm
fetchData('https://jsonplaceholder.typicode.com/todos/1')
.then(function(data){ console.log(data) })
.catch(function(error){ console.log(error) })
.finally(function(){ console.log('Done') })

//async/ await
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();