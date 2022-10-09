const button = document.querySelector("button")!;
// in addEventListener, we get an error, saying "Object is possibly null". So we need to put an exclamation mark to prove that it is not a nullable object
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
