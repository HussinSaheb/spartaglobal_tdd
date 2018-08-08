function addNumbers(number_1, number_2) {
  return number_1 + number_2;
}
function subtractNumbers(number_1, number_2) {
  return number_1 - number_2;
}
function multiplyNumbers(number_1, number_2) {
  return number_1 * number_2;
}
function divideNumbers(number_1, number_2) {
  return number_1 / number_2;
}
function sqrtNumber(number) {
  return Math.sqrt(number);
}
function powerNumber(number_1, number_2) {
  return Math.pow(number_1, number_2);
}
function bmiImperial(weight, height) {
  return (weight / Math.pow(height,2) * 703);
}
function bmiMetric(weight, height) {
  return (weight / Math.pow(height,2).toFixed(2))
}
function price(distance, miles_per_gallon, speed, cost_per_gallon) {
  if (speed > 60) {
    var reduced_mpg = (miles_per_gallon - ((speed % 60) * 2));
    if (reduced_mpg < 15) {
      reduced_mpg = 15;
    }
    return parseFloat((distance/reduced_mpg * cost_per_gallon).toFixed(2));
  }else{
    return parseFloat((distance/miles_per_gallon) * cost_per_gallon);
  }
}

function duration(distance,speed) {
  return parseFloat((distance/speed).toFixed(2));
}

module.exports= {
  addNumbers:addNumbers,
  subtractNumbers:subtractNumbers,
  multiplyNumbers:multiplyNumbers,
  divideNumbers:divideNumbers,
  sqrtNumber:sqrtNumber,
  powerNumber:powerNumber,
  bmiImperial:bmiImperial,
  bmiMetric:bmiMetric,
  price:price,
  duration:duration
}
