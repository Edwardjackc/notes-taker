

let  convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius =  (fahrenheit - 32) * 5 / 9 
  return celsius 
}

let tempOne = convertFahrenheitToCelsius(100)
let tempTwo = convertFahrenheitToCelsius(98);

console.log(tempOne)
 