let num = 103.941

console.log(num.toFixed(2))


console.log(Math.round(num)) 
console.log(Math.floor(num)); 
console.log(Math.ceil(num)); 

let makeGuess = function (guess) { 
let min = 1
let max = 4
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min 
console.log(randomNum)
return guess === randomNum

}
console.log(makeGuess(1))