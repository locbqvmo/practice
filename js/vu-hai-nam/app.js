/* ------------  Copy An Array ------------ */
console.log(`------------  Copy An Array ------------ \n`);

// Rest Parameter [Destructoring]
let arr1 = [1, 2, 3, 4, 5];
let [...rest] = arr1;
console.log('Using Rest Parameter: ', rest);

// Spread
let arr2 = [...arr1];
console.log('Using Spread: ', arr2);

// Slice
arr2 = arr1.slice();
console.log('Using Slice method: ', arr2);

// Concat
arr2 = [];
arr2 = arr2.concat(arr1);
console.log('Using Concat method: ', arr2);

// Push
arr2 = [];
arr2.push(...arr1);
console.log('Using Push method and Spread: ', arr2);

// JSON
arr2 = [];
arr2 = JSON.parse(JSON.stringify(arr1));
console.log('Using JSON: ', arr2);

// Pass by References
arr2 = {};
arr2 = arr1;
console.log('Using Passing by references: ', arr2);

// Array of
arr2 = [];
arr2 = Array.of(arr1);
console.log('Using Array.of() method and Spread: ', [...arr1]);

/* ------------  Copy An Object ------------ */
console.log(`\n------------  Copy An Object ------------ \n`);

// JSON
let obj1 = {
    name: 'Vu Hai Nam',
    age: 21,
};

let obj2 = JSON.parse(JSON.stringify(obj1));
console.log('Using JSON: ', obj2);

// Spread
obj2 = {};
obj2 = {...obj1};
console.log('Using Spread: ', obj2);

// Rest Parameter (Destructoring)
let {...rest1} = obj2;
console.log('Using Rest parameter: ', rest1);

// Pass by References
obj2 = obj1;
console.log('Using Passing by references: ', obj2);

// Object assign
obj2 = Object.assign({}, obj1);
console.log('Using Object.assign() method: ', obj2);

/* ------------  Asynchronous ------------ */
console.log(`\n------------  Asynchronous ------------ \n`);

// Callback
const myLog = () => {
    setTimeout(() => {
        console.log('Callback: Hello World');
    }, 1000);
}

const logger = callback => {
    callback();
}

// logger(myLog);

// Promise
const doAsync = () => {
    console.log('Getting user from DB');
    let randomResult = Math.floor(Math.random() * 2);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(randomResult === 1) {
                resolve({
                    name: 'Vu Hai Nam',
                    age: 21,
                    address: 'Ha Noi'
                });
            } else {
                reject('Something errors happend!');
            }
        }, 2000);
    })
}

// doAsync()
//     .then(user => {
//         console.log('Getting successfully!');
//         console.log(`
//             FullName: ${user.name}
//             Age: ${user.age}
//             Address: ${user.address}
//         `)
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('Process is ending!');
//     })

// Async/Await  --> Rewrite promise example
const getUserInfo = () => {
    console.log('Getting User infor');
    let randomResult = Math.floor(Math.random() * 2);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(randomResult === 1) {
                resolve({
                    name: 'Vu Hai Nam',
                    age: 21,
                    address: 'Ha Noi'
                });
            } else {
                reject('404 Error! Not found user');
            }
        }, 1000)
    })
}

const getUserImages = user => {
    console.log('Getting Image');
    let randomResult = Math.floor(Math.random() * 2);
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(randomResult === 1) {
                console.log(`Found Images of User: ${user.name}`);
                resolve(['Image1.png', 'Image2.png', 'Image3.jpeg']);
            } else {
                reject('404 error! Not fount image');
            }
        }, 1000)
    })
}

async function doAsync2() {
    try {
        let userInfo = await getUserInfo();
        console.log(userInfo);
        let userImg = await getUserImages(userInfo);
    } catch (error) {
        console.log(error);
        console.log('The program is ending!');
    }
}

// doAsync2();