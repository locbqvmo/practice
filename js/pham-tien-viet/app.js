// ================= Copy and clone =====================
const array = ['Javasript','Php','Dark','Html','CSS']
const object = {
      name : 'Javascript',
      cost : 1000,
}

// clone Array + Object . use =
const cloneArray1 = array ;
const cloneObject1 = object;
console.log('Use = : ',cloneArray1);
console.log('Use = : ',cloneObject1);

// copy Array + Object . use rest
const [...copyArray2] = array;
const {...copyObject2} = object;
console.log('Use rest : ', copyObject2);
console.log('Use rest : ', copyArray2);

// copy Array + Object . use spread
const copyArray3 = [...array];
const copyObject3 = {...object};
console.log('Use spread : ',copyArray3);
console.log('Use spread : ',copyObject3);

// Copy Array. use for
const copyArray4 = [];
    for (i=0;i<array.length;i++){
        copyArray4[i] = array[i];
    }
console.log('Use loop for : ', copyArray4);

// Copy Array + Object, use Object.assgin()
const copyArray5 = Object.assign([],array)
const copyObject5 = Object.assign({},object);
console.log('Use assign : ', copyObject5);
console.log('Use assign : ', copyArray5);

// Copy Array + Object, use JSON
const copyArray6 = JSON.parse(JSON.stringify(array))
const copyObject6 = JSON.parse(JSON.stringify(object))
console.log('Use JSON : ', copyObject6);
console.log('Use JSON : ', copyArray6);

// Copy Array, use concat
const copyArray7 = array.concat();
console.log('Use concat : ', copyArray7);

// Copy Array, use push
const copyArray8 = [] ;
for (i=0;i<array.length;i++){
    copyArray8.push(array[i]);
}
console.log('Use push', copyArray8);

//================ Simulate handling asynchronous ====================
// =========== using callback, promise and async/await ==============
function ba(){
    console.log('Ba')
}
function mot(){
    console.log('Mot')
}
function hai(){
    console.log('Hai');
}

// CallBack
function callback(){
    setTimeout(() =>{
        mot();
        setTimeout(() =>
        {
            hai();
            setTimeout(() =>{
                ba();
            },300)
        },2000)
    },1000)
}

callback();

// Promise
function nam(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve('Nam');
        },2000);
    })
}
function bon(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve('Bon');
        },1000);
    })
}
function sau(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve('Sau');
        },3000);
    })
}
bon()
.then(function(data){
    console.log(data);
    return nam();
})
.then(function(data){
    console.log(data);
    return sau();
})
.then(function(data){
    console.log(data);
})

// Async
function wait(ms) {
    return new Promise(r => setTimeout(r,ms))
}
async function run(){
    mot();
    await wait(2000);
    hai();
    await wait(3000);
    ba();
    await wait(1000);
}
async function main(){
    await run();
}
main();
