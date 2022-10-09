const button = document.querySelector("button")!;
// in addEventListener, we get an error, saying "Object is possibly null". So we need to put an exclamation mark to prove that it is not a nullable object
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
// to make sure that input1-2 are not null, we also need to say that they will get input from HTML AND also put an exclamation mark that marks them as non-nullable

function add(num1: number, num2: number) {
  /* we also need to assign a type to num1-2, as error says: Parameter 'num1' implicitly has an 'any' type, but a better type may be inferred from usage.
     to show that, we need to assign the values after a colon inside the function arguments
  */
  return num1 + num2;
}

button.addEventListener("click", function() {
  /* Since TS knows that .value function in JS only returns string AND that strings cannot be used as number variables in the function add above, we also need to
     explicitly convert these two values to numbers
  */
  console.log(add(+input1.value, +input2.value));
});
