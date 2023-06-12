function convertTemperature() {
    let temperatureInput = document.getElementById('temperature');
    let unitInput = document.getElementById('unit');
    let resultOutput = document.getElementById('result');
    
    let temperature = parseFloat(temperatureInput.value);
    let unit = unitInput.value;
    
    if (isNaN(temperature)) {
      resultOutput.textContent = 'Invalid temperature input';
      return;
    }
    
    let convertedTemperature;
    let convertedUnit;
    
    if (unit === 'celsius') {
      convertedTemperature = convertCelsius(temperature);
      convertedUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
      convertedTemperature = convertFahrenheit(temperature);
      convertedUnit = 'Celsius';
    } else if (unit === 'kelvin') {
      convertedTemperature = convertKelvin(temperature);
      convertedUnit = 'Celsius';
    }
    
    resultOutput.textContent = `${convertedTemperature} ${convertedUnit}`;
  }
  
  function convertCelsius(temperature) {
    return (temperature * 9/5) + 32;
  }
  
  function convertFahrenheit(temperature) {
    return (temperature - 32) * 5/9;
  }
  
  function convertKelvin(temperature) {
    return temperature - 273.15;
  }
  