
function add(x,y) {
  return x + y;
};

function multiply(x,y) {
  return x * y;
};

function divide(x,y) {
  return x / y;
};

function subtract(x,y) {
  return x - y;
};

function combine_numbers(num_as_array) {
  number = ""
  num_as_array.forEach(function(num) {
    number += num;
  });
  return parseInt(number);
};

function get_result(numbers, operation) {
  var num1 = numbers[0];
  var num2 = numbers[1];
  if (operation == "+") {
    return add(num1, num2)
  } else if (operation == "-") {
    return subtract(num1, num2)
  } else if (operation == "/") {
    return divide(num1, num2)
  } else {
    return multiply(num1, num2)
  }
};

$(document).ready(function() {
  var num_as_array = [];
  var numbers = [];
  var operation = "";

  $(".btn").on("click", function() {
    var pressed_button = $(this).html()
    if ($(this).hasClass("num-btn")) {
      num_as_array.push(parseInt(pressed_button));
      $(".result").append(pressed_button);
    } else if ($(this).hasClass("operation-btn")) {
      operation = pressed_button;
      $(".result").append(" " + pressed_button + " ");
      if (num_as_array.length > 0) {
        numbers.push(combine_numbers(num_as_array));
        num_as_array = [];
      }
    } else if (pressed_button == "=") {
      numbers.push(combine_numbers(num_as_array));
      num_as_array = [];
      result = get_result(numbers,operation)
      $(".result").html(result);
      numbers = [result];
      operation = "";
    } else {
      num_as_array = [];
      numbers = [];
      operations = "";
      $(".result").html("");
    }
    
  });

});