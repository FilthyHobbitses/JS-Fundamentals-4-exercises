const ftoc = function (degree) {
  let celcius = (5 / 9) * (degree - 32);
  console.log(celcius);
  return Math.round(celcius * 10) / 10;
};

const ctof = function (degree) {
  let farenheit = (degree * 9) / 5 + 32;
  console.log(farenheit);
  return Math.round(farenheit * 10) / 10;
};

ctof(27);

module.exports = {
  ftoc,
  ctof,
};
