// Addition Function
function sum() {
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
  if (num1 && num2) {
    document.getElementById("result").value = num1 + num2;
  }
  else {
    alert("Please enter a number");
  }
}
// Subtraction Function
function subt() {
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
  if (num1 && num2) {
    document.getElementById("result").value = num1 - num2;
  }
  else {
    alert("Please enter a number");
  }
}
// Multiply Function
function mult() {
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
  if (num1 && num2) {
    document.getElementById("result").value = num1 * num2;
  }
  else {
    alert("Please enter a number");
  }
}
// Division Function
function divide() {
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
  if (num1 && num2) {
    document.getElementById("result").value = num1 / num2;
  }
  else {
    alert("Please enter a number");
  }
}