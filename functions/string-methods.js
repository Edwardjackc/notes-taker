let name = '    Edward Cheatham'

// Length property 
console.log(name.length)

// Covert to uppercase
console.log(name.toUpperCase())

// Covert to lower case 
console.log(name.toLowerCase())

// Includes 

let password = 'abc123sord098'
console.log(password.includes('wdd'))

// Trim - removes the whitespace from both ends.

console.log(name.trim())

// Challenge  Area 
// isValidPassword 

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password')
}


console.log(isValidPassword('pasddfasdfsafd'))
console.log(isValidPassword('password'))
console.log(isValidPassword("33"));
