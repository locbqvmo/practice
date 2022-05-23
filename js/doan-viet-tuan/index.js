
// Show difference ways of copy or clone an array or an object
// Clone Array 
// **--Shalow copy
const arr = [1,2,3,4,5,6];

const cloneArrBySpread  = [...arr];
const cloneArrBySlice = arr.slice();

let cloneArrByLoop = [];
for(let i = 0; i < arr.length; i++) {
  cloneArrByLoop.push(arr[i])
};

const cloneArrByMap = arr.map(index => index);

const cloneArrByFilter = arr.filter(() => true);

const cloneArrByReduce = arr.reduce((newArray, element) => {
  newArray.push(element);
  return newArray;
}, []);

const cloneArrByConcat = [].concat(arr);

const cloneArrByFrom = Array.from(arr);



// --Deep Copy 
  // Using  JSON.parse and JSON.stringify 
  const deepArr = [[1,2], [3,4]];
  const cloneDeepArr = JSON.parse(JSON.stringify(deepArr));




// Clone Object
// --Shalow copy
  const obj = {
    id: 1,
    name: 'Tony',
    age: 23
  }

  const cloneObjBySpread = {...obj};
  const cloneObjByAssign = Object.assign({}, obj)

  // --Deep Copy 

  const deepObj = {
    id: 1,
    title: 'Clone',
    img: {
      url: 'someurl.com',
      alt: 'Clone'
    }
  };

  const cloneDeepObj = JSON.parse(JSON.stringify(deepObj));


// Simulate handling asynchronous using callback, promise and async/await

const randomNumber = () => (Math.random() * 1000 + 500).toFixed();

// using Callback:

const getUser = (userId, callback) => {
  setTimeout(() => callback({userId, userName: 'Tony'}) ,randomNumber())
};

const getUseremail = (user, callback) => {
  setTimeout(() => {
    let email = `${user.userName}@mail.com`
    callback({ email})
  } ,randomNumber())
}

getUser(5, (user) => {
  getUseremail(user, ({email}) => {
    console.log(`user ${user.userName} has ${email}`)
  })
})



// Using Promise


const creatUser = () => {
  const user = {id: 1, userName: 'Kenny', age: 32}
  return new Promise(resolve => {
    setTimeout(() => resolve(user), randomNumber())
  })
};

const creatEmail = (user) => {
  const email = `${user.userName}${user.age}@mail.com`
  return new Promise(resolve => {
    setTimeout(() => resolve(email), randomNumber())
  })
}

creatUser()
  .then(user => creatEmail(user))
  .then(result => console.log(result))

// Using Async/await

const handleUser = async () => {
  const user = await creatUser();
  const email = await creatEmail(user);
  console.log(`$ UserId ${user.userName} has email: ${email}`)
}

handleUser()


