describe("Intro to doing TDD in Javascript", function(){
  var calculator = require("../lib/calcEngine")


  it("should add two numbers together", function(){
      // expect is an assertion          // to be 5
      expect(calculator.addTwoNumbers(3,2)).toEqual(5);
  })
  it("should add negative to positive numbers", function(){
      // expect is an assertion          // to be 5
      expect(calculator.addTwoNumbers(-8,8)).toEqual(0);
  })
})
