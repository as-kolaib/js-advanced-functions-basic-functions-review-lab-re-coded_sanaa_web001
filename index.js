// Your code here


function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun());

  
  function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.` ;
  }

  console.log(mondayWork('from'));

  function wrapAdjective(wraps = "*") {
    return function result(emphatic = "a hard worker") {
      return `You are ${wraps}${emphatic}${wraps}!`;
    }
  }

  
  let Calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    },
  };
  
const actionApplyer = (base, array) =>
  array.reduce((accumulatedOutput, fun) => fun(accumulatedOutput), base);
  
console.log(actionApplyer(0, []));
let arrayOfTransforms = [
  function (a) {
    return a * 2;
  },
  function (a) {
    return a + 1000;
  },
  function (a) {
    return a % 7;
  },
];
actionApplyer(13, arrayOfTransforms);
  

  
