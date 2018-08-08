
var chosen = false;

function calculator(){
  while (!chosen) {
    //prompt the user for the type of calculator they'd like to use
    var choice = prompt("Please chose the mode you'd like to access\n" + "a - Advanced\n"+ "b - Basic\n" + "i - BMI\n" + "t - Trip\n");
    // switch on the choice
    // setting the choice to Lowercase
    // to make the imput be correct no matter if user
    // uses uppercase or lowercase letters
    switch (choice.toLowerCase()) {
      // if A, is chosen then
      // Advanced Calculator
      case "a":
         advancedCalc();
      break;
      // Basic Calculator
      case "b":
         basicCalc();
      break;
      // BMI Calculator
      case "i":
        bmiCalc();
      break;
      // Trip Calculator
      case "t":
        tripCalc();
      break;
      default:
      alert(choice +" isnt a valid entry");
    }
  }
}

//Function to do basic oprations
function basicCalc(){
  //prompt to chose what operator to use
  var operator =  parseInt(prompt("please chose your operation \n" + "1 - Addition (+)\n" +" 2 - Subtraction (-)\n"+" 3 - Mulitplication (*) Root\n"+" 4 - Division (/)\n" ));
  // use our function with 2 prompts, and default messages for 2 values
  // save the returned value_array
  var value_array = prompt_for_values(2);
  //assign the returned value_array values from index 0 and 1 into the numbers to use
  number_1 = value_array[0];
  number_2 = value_array[1];
  // switch on the operator
  switch (operator) {
    case 1:
      alert("The addition of numbers: " + number_1 + " + " +  number_2+ " = " + addNumbers(number_1,number_2));
      chosen = promptExit();
      break;
    case 2:
      alert("The subtraction of numbers: " +number_1 + " - " + number_2+ " = "+ subtractNumbers(number_1,number_2));
      chosen = promptExit();
      break;
    case 3:
      alert("The mulitplication of numbers: " +number_1 + " * " + number_2  +" = "+ multiplyNumbers(number_1,number_2));
      chosen = promptExit();
      break;
    case 4:
      alert("The division of numbers: -:" +number_1 + " / " + number_2 +" = "+ divideNumbers(number_1,number_2));
      chosen = promptExit();
      break;
    default: calculator();
  }
}
// function to do more Advanced operations
function advancedCalc() {
  var type =  parseInt(prompt("please chose \n" + "1 - Power\n" +" 2- Square Root\n" ));
  if (type==1) {
    // call for 2 prompts
    var value_array = prompt_for_values(2);
    number_1 = value_array[0];
    number_2 = value_array[1];
    alert(powerNumber(number_1,number_2));
    chosen = promptExit();
  }else if (type==2) {
    //call for single prompt and return value used in the sqrt.
    alert(sqrtNumber(prompt_for_values(1)));
    chosen = promptExit();
  }
}
// function to calculate the BMI
function bmiCalc() {
  //prompt whether user wants to use the imperial or metric system
  var type =  parseInt(prompt("please chose your operation \n" + "1 - Imperial (lb)\n" +" 2 - Metric (kg)"));
  // conditional if the type is imperial
  var weight, height, value_array;
  if (type == 1) {
    value_array = prompt_for_values(2,"please enter your weight(lb)","please enter your height(in)");
    weight = value_array[0];
    height = value_array[1];
    // we carry out the imperial formula for BMI calculation
    alert("Your BMI is :" + bmiImperial(weight,height));
    chosen = promptExit();
  }else if(type == 2 ){
    value_array = prompt_for_values(2,"please enter your weight(kg)","please enter your height(m)");
    weight = value_array[0];
    height = value_array[1];
    alert("Your BMI is : " + bmiMetric(weight,height));
    chosen = promptExit();
  }
}
//function to calculate the trip
function tripCalc() {
  //send a message to ask the user to have the values ready
  alert("Please prepare the following information\n" + "distance\n"+ "fuel efficiency (mpg)\n" + "cost per gallon\n" + "speed\n");
  // use the fuction to prompt the user to provide the details required
  var value_array =  prompt_for_values(4,"please enter your distance(miles)","please enter your miles per gallon (mpg)","please enter your cost per gallon(£/gallon)","please enter your speed(mph)")
  // assign the return value of the prompt from the value_array to each individual variable
  var distance = value_array[0];
  var miles_per_gallon = value_array[1];
  var cost_per_gallon = value_array[2];
  var speed = value_array[3];
  // return an alert
  alert("Your trip will take "+ duration(distance,speed) + "hours and cost £" + price(distance,miles_per_gallon,speed, cost_per_gallon));
  // prompt the user if they want to continue
  chosen = promptExit();
}

calculator();
