// undefined for variables 
let name 

name = "Ed"
if (name === undefined) { 
  console.log("Please define a value for name")
}else {
  console.log(name)
}

//undefined for functions 
// undefined as default return for functions 

let square = function (num) {
  console.log(num)
}

let result = square()
console.log(square)

// how do we clear a variables value. 

let age = 27 

age = undefined 

console.log(age)