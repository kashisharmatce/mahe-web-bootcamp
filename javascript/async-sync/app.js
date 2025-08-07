// Arrow functions
// sync - async javascript
// callback
// promises

// let appFun = function app(){
//     console.log("hello");
// }
// console.log(appFun);

// let arrowFun = () => {
//     // arrow function
//     console.log(2+3);
// }
// arrowFun()

// syncronous and asyncronous js
// console.log("one")
// console.log("two")
// // API code - database
// console.log("three")
// console.log("four")

// setTimeout()  = can give a time duration to execute
// setTimeout(function , duration, arg1, arg2)
// setTimeout( ()=>{
//     let name1 = "abc"
//     console.log(`hello ${name1}`);
// } , 2000)

// callback functions : can pass a function inside
// another function as an argument
// function abc(a, b) {
//   return a + b;
// }
// abc(1, 2);
// function sum(a, b) {
//   console.log(a + b);
// }

// function xyz(a, b, sumCallBack) {
//   sumCallBack(a, b);
// }
// xyz(2, 9, sum);

// callback Hell :

// example-2 Callback
// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();
// }
// function class1() {
//   console.log('Bootcamp!');
// }
// greet('Kashi', class1);

// Promises
// let getPromise1 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I'm a promise!!");
//   });
// };

// Promises : resolve , reject
// resolve : success
// reject : failure
let getPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Function");
    resolve("success");
  }, 3000);
});
let abc = getPromise;
abc.then(()=>{
    console.log("working");
})
abc.catch((err)=>{
    console.log(err);
})

// then and catch 

function random() {
  try {
    let a = 20;
    if (a >= 20) {
      console.log("yes");
    } else "invalid";
  } catch {
    (err) => {
      console.log(err);
    };
  }
}
random();
