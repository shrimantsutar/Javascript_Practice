// Primative DataType

// 7 Types : String, Number, Boolean, null, undefines, Symbol, BigInt

// String
const name="Shrimant"

// Number
const score=100
const scoreavalue=300.2

// Boolean
const inLogin =false

// Null
const outsideTemp= null

// Undefined
let usedEmail;

// Symbol
const id = Symbol(1234);
const anotherId = Symbol(1234);

console.log(id === anotherId);

// BigInt
const bigNumber =12837451827451872n



// Referance DataType (Non-Primitive )

// Array, Objests, Funstions


// Array
const heros=["shktiman","aaryaman","salman","shah rukh","Aamir khan"]

// Object 

let mydetails={
    Name: "shree",
    age: 23,
    address: " N-2,Mahalaxmi Chowk", 
}

//Funstions

const Myfunstion= function(){
    console.log("Hello World");
    
}

// how to find data type of any dataypes

console.log(typeof mydetails )


//   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//     Stack (Primitive Data Types)         Heap (Non-Primitive Data Type)

// Stack

let myYoutubename = "codewithharry"

let anothername = myYoutubename

anothername = "satyabhama blogs"

console.log(anothername)
console.log(myYoutubename)



// Heap


let UserOne={
    email:"shrimant@gmail.com",
    age: 12,
    address: "aklsjfhlk",
    contact: 28374628764,
}

let userTwo = UserOne
userTwo.email="rohan@mail.com";


console.log(UserOne);
console.log(userTwo);













