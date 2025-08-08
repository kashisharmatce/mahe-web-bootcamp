// syntax:
// map((element, index, array) => {
   //return something
// })

// example-1
const array = [3,1,15,1,5,3,23]
//map the array
array.map((el) =>{
    console.log(el)
})

// example-2
const users = [
  { firstName: "john", lastName: "doe" },
  { firstName: "Daniel", lastName: "steve" },
  { firstName: "mike", lastName: "hoff" },
];
//map the array and display only first names
users.map((el) => {
  console.log(el.firstName);
});

// LINK : https://www.freecodecamp.org/news/javascript-map-method/