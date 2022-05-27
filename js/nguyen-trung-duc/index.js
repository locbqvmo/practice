// Show difference ways of copy or clone an array or an object 

// 1. Spread Operator (Shallow copy)
numbers = [1, 2, 3];
numbersCopy = [...numbers];
// 2.for() Loop (Shallow copy)
numbers = [1, 2, 3];
numbersCopy = [];

for (i = 0; i < numbers.length; i++) {
  numbersCopy[i] = numbers[i];
}
// 3.while() Loop (Shallow copy)
numbers = [1, 2, 3];
numbersCopy = [];
i = -1;

while (++i < numbers.length) {
  numbersCopy[i] = numbers[i];
}
// 4. Array.map (Shallow copy)
numbers = [1, 2, 3];
double = (x) => x * 2;

numbers.map(double);
// 5. Array.filter (Shallow copy)
[1, 2, 3].filter((x) => x % 2 === 0);
// 6. Array.reduce (Shallow copy)
numbers = [1, 2, 3];

numbersCopy = numbers.reduce((newArray, element) => {
  newArray.push(element);

  return newArray;
}, []);
// 7. Array.slice (Shallow copy)    
[1, 2, 3, 4, 5].slice(0, 3);
// [1, 2, 3]
// Starts at index 0, stops at index 3
// 8. JSON.parse and JSON.stringify (Deep copy)
nestedNumbers = [[1], [2]];
numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));

numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);
// 9. Array.concat (Shallow copy)
[1, 2, 3].concat(4); // [1, 2, 3, 4]
[1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
// 10. Array.from (Shallow copy)
numbers = [1, 2, 3];
numbersCopy = Array.from(numbers);
// [1, 2, 3]

// Simulate handling asynchronous using callback, promise and async/await
// Async / Await
const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if(!error)
                resolve({ text: 'Complete Code Example' })
            else
                reject()
        }, 2000)     
    })
}

async function fetchTodo () {
    const todo = await getTodo()
    return todo
}

fetchTodo().then(todo => console.log(todo.text))

// Promises
const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if(!error)
                resolve({ text: 'Complete Code Example' })
            else
                reject()
        }, 2000)     
    })
}

getTodo().then(todo => {
    console.log(todo.text)
})

// Callbacks

const getTodo = callback => {
    setTimeout(() => {
       callback ({ text: 'Complete Code Example' })
    }, 2000)
}

getTodo(todo => {
    console.log(todo.text)
})

