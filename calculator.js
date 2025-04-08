//alert("Welcom to my calculator!");
let calculated = false;
function append(num) {
  //Retrive value from the display text box
  if (calculated && !"+-*/%".includes(num))
    document.getElementById("result").value = 0;
  var element = document.getElementById("result").value;

  if (element == 0) element = num;
  else element += num;

  // Append the number to the display value
  document.getElementById("result").value = element;
  calculated = false;
}
function calculate() {
  let element = document.getElementById("result").value;
  // Evaluate the expression in the display value
  let result = eval(element);
  // Display the result in the display value
  document.getElementById("result").value = result;
  calculated = true;
}
function backSpace() {
  // Get the current value of the display
  let result = document.getElementById("result").value;
  if (result.length == 1) result = 0;
  else result = result.slice(0, -1);
  // Remove the last character from the display value
  document.getElementById("result").value = result;
}
function memorySave() {
  // Save the current value of the display to memory
  localStorage.setItem("data", document.getElementById("result").value);
  if (+result != 0)
    localStorage.setItem("data", document.getElementById("result").value);
}
function memoryRestore() {
  // Retrieve the value from memory and display it
  let data = localStorage.getItem("data");
  data = data ?? 0;
  document.getElementById("result").value = data;
}
function memoryAdd() {
  let result = document.getElementById("result").value;
  // Check if the display value is empty
  if (result != 0) {
    // Add the current value of the display to the value in memory
    let data = localStorage.getItem("data");
    data = data ?? 0;
    localStorage.setItem("data", +data + +result);
  }
}
function memoryMinus() {
  let result = document.getElementById("result").value;
  // Check if the display value is empty
  if (result != 0) {
    // Subtract the current value of the display from the value in memory
    let data = localStorage.getItem("data");
    data = data ?? 0;
    let res = +data - +result;
    if (res == 0) localStorage.removeItem("data");
    localStorage.setItem("data", res);
  }
}
function memoryCancel() {
  // Clear the value in memory
  localStorage.removeItem("data");
}
function clearAll() {
  // Clear the display value
  document.getElementById("result").value = 0;
  calculated = false;
  // Clear the value in memory
  localStorage.removeItem("data");
}
