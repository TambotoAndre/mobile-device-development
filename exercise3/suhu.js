


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  let temperature = 99.20;
  let celsius = fahrenheitToCelsius(temperature);
  
  export { fahrenheitToCelsius, temperature, celsius};
  