// Exercise 1
// Create a function that filters a list of users whose confirmation_email property is ONLY set to true. 
// User the built in filter method to do just this.

let users = [
  {
    username: "John123",
    confirmation_email: true,
  },
  {
    username: "Amy123",
    confirmation_email: false,
  },
  {
    username: "Jamie123",
    confirmation_email: true,
  },
];
let confirmedUsers = users.filter((user)=>{
    return user.confirmation_email === true
})
console.log(confirmedUsers)
  
 

// Exercise 2
// Define a function that will convert a number (kilometers) into miles.

function convertKiloToMiles(numKilo){
    return numKilo * 0.62137;
}
let distance = convertKiloToMiles(1.2);

console.log(distance);


