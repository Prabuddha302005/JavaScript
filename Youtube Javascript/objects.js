let myObj = {
    name: "lucky",
    hobby: "reading",
    salary: 12132133231312,
    email: "prabuddha@google.com"
}
console.log(myObj.email)
console.log(myObj["name"])


// let myObj1 = new Object()
// console.log(myObj1)

let myObj1 = {}

// Destructuring
let tinderObj = {
    name: "Emma",
    age: 21,
    rate: 4.5,
    occupation: "Actress"
}
const {occupation: job} = tinderObj
console.log(job)