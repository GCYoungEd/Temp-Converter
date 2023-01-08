//Variables for each measuring method

let C = "C"; //Celsius variable
let F = "F"; //Fahrenheit variable
let K = "K"; //Kelvin Variable


//formulae to do conversions, used arrow function to call each function in the if statements below.
const CelsiusToKelvin = (C) => {//formula to work out Kelvin when Celsius entered
  return C + 273.15;
};
const CelsiusToFahrenheit = (C) => {//formula to work out Fahrenheit when Celsius entered
  return (C * 9) / 5 + 32;
};
const FahrenheitToCelsius = (F) => {//formula to work out Celsius when Fahrenheit entered
  return ((F - 32) * 5) / 9;
};
const FahrenheitToKelvin = (F) => {//formula to work out Kelvin when Fahrenheit entered
  return ((F + 459.67) * 5) / 9;
};
const KelvinToCelsius = (K) => {//formula to work out Celsius when Kelvin entered
  return K - 273.15;
};
const KelvinToFahrenheit = (K) => {//formula to work out Fahrenheit when Kelvin entered
  return (K * 9) / 5 - 459.67;
};

//first prompt asking for first metric converted to lowercase
let metric1 = prompt(
  "In which metric is the temperature you are converting?\n C-Celsius\n F-Fahrenheit\n K-Kelvin"
).toLowerCase();

//2nd Prompt asking for 2nd metric you want it converted to and coverted to lowercase
let metric2 = prompt(
  "To which metric would you like to convert the temperature?\n C-Celsius\n F-Fahrenheit\n K-Kelvin"
).toLowerCase();

//3rd Prompt asking for numerical value that they want to be converted.
let temp = Number(
  prompt("Please enter a numerical value you would like to convert.")
);

/*In conditionals below it looks at the first metric entered, then compares it to 
the 2nd metric entered. Then using the function it converts the value given in the temp variable(in 3rd prompt)
using the values entered for metric1 and metric2. It then displays the result in an alert
*/

if (metric1 == "c") {//Conditional to work out other temperature metrics from Celsius
  if (metric2 == "k") {
    let result = CelsiusToKelvin(temp);
    alert(`${temp}°C is ${result}K `);
  } else if (metric2 == "f") {
    let result = CelsiusToFahrenheit(temp);
    alert(`${temp}°C is ${result}°F `);
  } else if (metric2 == "c") {
    alert(`${temp}°C is ${temp}°C `);
  } else {
    alert("invalid input!");
  }
} else if (metric1 == "f") {//Conditional to work out other temperature metrics from Fahrenheit
  if (metric2 == "c") {
    let result = FahrenheitToCelsius(temp);
    alert(`${temp}°F is ${result}°C `);
  } else if (metric2 == "k") {
    let result = FahrenheitToKelvin(temp);
    alert(`${temp}°F is ${result}K `);
  } else if (metric2 == "f") {
    alert(`${temp}°F is ${temp}°F `);
  } else {
    alert("invalid input!");
  }
} else if (metric1 == "k") {//Conditional to work out other temperature metrics from Kelvin
  if (metric2 == "c") {
    let result = KelvinToCelsius(temp);
    alert(`${temp}K is ${result}°C `);
  } else if (metric2 == "f") {//updated after received 88%
    let result = KelvinToFahrenheit(temp);
    alert(`${temp}K is ${result}°F `);
  } else if (metric2 == "k") {
    alert(`${temp}K is ${temp}K `);
  } else {
    alert("invalid input!");
  }
}

