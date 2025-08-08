// variables : to store data
// var, let, const 
//var : can redeclare and can re-assign
//let : cannot redeclare but can re-assign
// const : cannot redeclare nor can re-assign

// write a code to add two numbers

// let num2 = 8
// let result = num1 - num2



// assignment operators
// let num1 = 4
// num1 += 2 //num1 = num1 + 2
// num1 *= 3
// console.log(typeof(num1));  //type of data

// let a = '2'
// let b = 2
// let res = '2' + 2 + 2
// console.log(res);


// Scopes in Javascript : 
// {
//     let a = "hello"
// }
// let a = "6"
// console.log(a);


// Conditional statement 
// if(condition) { statement }
// else { statement }

// let value = 11
// if( value % 2 == 0 ){
//     console.log("this value is even");
// }
// else{
//     console.log("this is odd!!");
// }

// If-else exampole :
// let studentMarks = 90;

// if( studentMarks >= 90){
//     console.log("A");
// }
// else if(studentMarks >= 80 && studentMarks<=90)
// {
//     console.log("B");
// }
// else if(studentMarks >= 50 && studentMarks <= 80)
// {
//     console.log("C");
// }
// else{
//     console.log("Invalid");   
// }



    
// write a code, print numbers from 1 to 50 
// ~ don't use loops

// for loop
// do while
// while 

// for(start ; condition;  counter){
//     logic
// }

// increment and decrement operator

// let num = 1
// ++num
// console.log(num);


// for(let num = 10; num>= 1; num--){
//     console.log(num); 
// }


// let arr = [1,2,3,4,5,6,7,8]
// for( let i = 0 ; i < arr.length; i++){
//     console.log(arr[i]);
// }
// print values of array which are on even index

// Object:
let obj = {
    // key : value
    name1 : "Kashi",
    contact : 567899,
    isAdult : true,
    address : {
        city : "Bangalore"
    },
    hobby : ["coding" , "sports"]
}




function fun(a, b){
    // logic
    return a+b
}
// console.log(fun(2,3))
// console.log(fun(3,4))
// console.log(fun(10,20))



// for...of - Use to loop over strings and arrays.
// for...in - Use to loop over objects.

// For in loop:
const str = "Hello World";

for(element of str) {
  console.log(element);
}
// output : H E L L O W O R L D

const student = {
    registration: "123456",
    name: "Sandeep",
    age: 33,
}

for(key in student) {
  console.log(key, student[key]);
}