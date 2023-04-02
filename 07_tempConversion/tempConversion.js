const convertToCelsius = function(t) {
  t = Math.round(((t - 32) / 1.8) * 10) / 10;
  return t;
};

const convertToFahrenheit = function(t) {
  t = Math.round((t * 1.8 + 32) * 10) / 10;
  return t;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
