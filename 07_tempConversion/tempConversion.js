const convertToCelsius = function (fahrenheit) {
  // converting fahrenheit to celsius -> formula is (x - 32 * 5/9)
  fahrenheit = ((fahrenheit - 32) * 5) / 9;
  return Math.round(fahrenheit * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  // converting celsius to fahrenheit -> formula is (x * 9/5 + 32)
  celsius = (celsius * 9) / 5 + 32;
  return Math.round(celsius * 10) / 10;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(37.8));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
