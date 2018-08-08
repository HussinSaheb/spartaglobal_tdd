describe("Intro to doing TDD in Javascript", function(){
  var calculator = require("../lib/calcEngine")

//test for adding
  it("should add two numbers together", function(){
      // expect is an assertion          // to be 5
      expect(calculator.addNumbers(3,2)).toEqual(5);
      expect(calculator.addNumbers(30,2)).toEqual(32);
  })
  it("should add negative to positive numbers", function(){
      expect(calculator.addNumbers(-8,8)).toEqual(0);
  })
  // test for subtraction
  it("should subtract two numbers", function(){
      expect(calculator.subtractNumbers(20,4)).toEqual(16);
      expect(calculator.subtractNumbers(20,5)).toEqual(15);
  })
  // test for mulitplication
  it("should multiply two numbers", function(){
      expect(calculator.multiplyNumbers(20,4)).toEqual(80);
      expect(calculator.multiplyNumbers(20,4)).toEqual(80);
  })
  // test for division
  it("should divide two numbers", function(){
      expect(calculator.divideNumbers(20,4)).toEqual(5);
  })
  //test for squareRoot
  it("should square root a number", function(){
      expect(calculator.sqrtNumber(25)).toEqual(5);
  })
  // test for power
  it("should make the first number a base and the second number an exponent", function(){
      expect(calculator.powerNumber(10,3)).toEqual(1000);
  })
  // test for imperial bmi calc
  it("should calculate the imperial BMI", function(){
      expect(calculator.bmiImperial(100,10)).toEqual(703);
  })
  // test for metric bmi calc
  it("should calculate the metric BMI", function(){
      expect(calculator.bmiMetric(100,10)).toEqual(1.00);
  })
  // calculating the price
  it("should calculate the price", function(){
      expect(calculator.price(60,60,60,1)).toEqual(1);
  })
  // price test after the increase of speed,
  it("should calculate the price with speed higher than 60", function(){
      expect(calculator.price(60,60,62,1)).toEqual(1.07);
  })
  it("should calculate the price with speed higher than 60 and mpg lower than 15", function(){
      expect(calculator.price(60,14,70,1)).toEqual(4);
  })
  //test for duration
  it("should calculate the duration", function(){
      expect(calculator.duration(60,60)).toEqual(1);
  })


})
