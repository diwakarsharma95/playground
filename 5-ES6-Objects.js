const name = 'Diwakar'
const userAge = 27

const user = {
    name,
    userAge,
    location: 'Brisbane'
}

console.log(user)


//Object destructuring
const person = {
    firstName: "Diwakar",
    lastName: "Sharma",
    age: 27,
    maritalStatus: undefined,
}

const {firstName, age, degree="Masters in Information Technology"} = person
console.log(firstName)
console.log(age)
console.log(degree)



const transaction = (type, myProduct) => {

}

transaction('order', person)
