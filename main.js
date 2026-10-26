// Store the temperature in Kelvin.
let kelvin = 293;
// Convert Kelvin to Celsius.
const celsius = kelvin - 273;
// Convert Celsius to Newton.
const newton = celsius * (33 / 100);
// Convert Celsius to Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
// Round Fahrenheit down to a whole number.
fahrenheit = Math.floor(fahrenheit);
// Round Celsius down to a whole number.
const celsiusTemp = Math.floor(celsius);
// Round Newton down to a whole number.
const newtonTemp = Math.floor(newton);
// Display each converted temperature.
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsiusTemp} degrees Celsius.`);
console.log(`The temperature is ${newtonTemp} degrees Newton.`);
