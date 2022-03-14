// Addition Function
function sum() {
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
  document.getElementById("result").value = num1 + num2;
}
// Subtraction Function
function subt() {
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
  document.getElementById("result").value = num1 - num2;
}
// Multiply Function
function mult() {
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
  document.getElementById("result").value = num1 * num2;
}
// Division Function
function divide() {
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
  document.getElementById("result").value = num1 / num2;
}