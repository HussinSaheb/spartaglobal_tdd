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

function duration(distance,speed){
  return parseFloat((distance/speed).toFixed(2));
}

function prompt_for_values(amount_of_prompts,msg_1= "please enter first number",msg_2 = "please enter second number",msg_3 ="",msg_4="") {
    //create the variables to stope the prompts return value
  var first_number,second_number,third_number,fourth_number;
  if (amount_of_prompts == 1) {
    //if the prompts needed is only one.
    first_number = parseFloat(prompt(msg_1));
    // we dont need to return an array. just the value right away
    return first_number
  }
  else if (amount_of_prompts == 2) {
     first_number = parseFloat(prompt(msg_1));
     second_number = parseFloat(prompt(msg_2));
    // return the value as an array
    return [first_number, second_number];
  }else if (amount_of_prompts ==4 ) {
    // assign the values of the prompt to  msg1-4
     first_number = parseFloat(prompt(msg_1));
     second_number = parseFloat(prompt(msg_2));
     third_number = parseFloat(prompt(msg_3));
     fourth_number = parseFloat(prompt(msg_4));
     // return the values as an array
    return [first_number, second_number,third_number,fourth_number];
  }
}

function promptExit(){
  var result = prompt("Do you wish to:\n Yes - continue \n No - Exit ");
  if (result.toLowerCase() == "yes") {
    return false;
  }else if(result.toLowerCase() == "no"){
    return true;
  }
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
  duration:duration,
  prompt_for_values:prompt_for_values,
  promptExit:promptExit
}
