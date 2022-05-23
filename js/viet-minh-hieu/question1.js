/* QUESTION 1: Show difference ways of copy or clone an array or an object
  - There are two main ways to copy or clone an array or an object is:
    + Shallow copy
      * is a copy whose properties do not share the same references
      * when changing either the source or the copy, you can be assured you're not causing the other object to change too
    + Deep copy
      * is a copy whose properties share the same references
      * when changing either the source or the copy, you may also cause the other object to change too
*/

// 1) SHALLOW COPY
//  a) Object
const info = {
  name: "Hieu",
  age: 22,
  address: "Ha Noi",
};
//Ex1: assign value
const shallowCopyByObjAssignValue = info;
//   b) Array
const foods = ["rice", "meat", "fish", "egg"];
//Ex1: assign value
const shallowCopyByArrAssignValue = foods;

// 1) DEEP COPY
//  a)Object
const course = {
  name: "Javascript",
  time: "3 month",
  price: 1000,
};
const detailInfo = {
  name: "Ramsey",
  age: 30,
  address: {
    city: "London",
    country: "England",
  },
};
//Ex1: Spread operator
const deepCopyByObjSpread = { ...course };
//Ex2:  Object.assign method
const deepCopyByAssignMethod = Object.assign({}, course);
//EX3:  JSON.parse() and JSON.stringify() with nested Object
const deepCopyByParseAndStringify = JSON.parse(JSON.stringify(detailInfo));
//   b) Array
const randomNumber = [3, 7, 2, 8, 23, 35, 74, 2, 4, 5, 6];
//Ex1:  Spread operator
const deepCopyByArrSpread = [...randomNumber];
//Ex2: map method
const deepCopyByMap = randomNumber.map((item) => item);
//Ex3: filter method
const deepCopyByFilter = randomNumber.filter((item) => item >= 10);
//Ex4: slice method
const deepCopyBySlice = randomNumber.slice(1, 6);
//Ex5: concat method
const numberToConcat = [100, 200, 300];
const deepCopyByConcat = randomNumber.concat(numberToConcat);
