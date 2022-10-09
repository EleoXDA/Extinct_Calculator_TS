const button = document.querySelector("button")!;
// in addEventListener, we get an error, saying "Object is possibly null". So we need to put an exclamation mark to prove that it is not a nullable object
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
// to make sure that input1-2 are not null, we also need to say that they will get input from HTML AND also put an exclamation mark that marks them as non-nullable

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
