// Basic JS Calc | Javascript Logic | © 2024 Damian Robinson

// Create variables
var field = "field";
var calc = document.getElementById("calculator");

// Display html values on button push
function display(number) {
  document.getElementById(field).value += number;
}

// Process field input
function process_input(event) {
  if (
    // Limit inputs to mathematical characters
    /[0-9+\-*/.\b]/.test(event.key) ||
    (event.key === "Enter" && event.target.tagName === "INPUT")
  ) {
    // Append characters to field value
    document.getElementById(field).value += event.key;
  } else {
    // Prevent default action for non-mathematical characters
    event.preventDefault();
  }
}

// Enter kepress triggers solve function
calc.onkeyup = function (event) {
  if (event.keyCode === 13) {
    let x = document.getElementById(field).value;
    solve();
  }
};

// Evaluate
function solve() {
  let x = document.getElementById(field).value;
  let y = math.evaluate(x);
  document.getElementById(field).value = y;
}

// Clear input field display
function clear_field() {
  document.getElementById(field).value = "";
}
