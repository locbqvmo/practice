// // Show difference ways of copy or clone an array or an object


// ///// Clone Array
// const arr = [1, 2, 3, 4, 5]

// // By Loop
// let cloneArrByLoop = [];
// for(let i = 0; i < arr.length; i++) {
//   cloneArrByLoop.push(arr[i])
// };

// // By Array Method
// const cloneArrByConcat = [].concat(arr);
// const cloneArrBySlice = arr.slice();
// const cloneArrByMap = arr.map(index => index);
// const cloneArrByFilter = arr.filter(() => true);
// const cloneArrByReduce = arr.reduce((newArr, element) => {
//   newArr.push(element);
//   return newArr;
// }, []);

// const cloneArrBySpread = [...arr];


// ///// Clone Object
// const user = {
//   id: 1,
//   name: 'Ta Cong Duc'
// }

// const cloneObjBySpread = {...user};
// const cloneObjByAssign = Object.assign({}, user)


// 

const getUser = () => {
  const user = {id: 1, userName: 'Ta Cong Duc'}
  return new Promise(res => {
    setTimeout(() => res(user), 2000)
  })
};


// Using Async/await

const handleUser = async () => {
  const user = await getUser();
  console.log(user);
}

handleUser()