// Get reference to the display element
const box2 = document.getElementById('box2');

// Function to clear the display
function clearDisplay() {
  box2.value = '';
}

// Function to append value to the display
function appendValue(value) {
  box2.value += value;
}

// Function to delete the last character
function deleteLast() {
  box2.value = box2.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
  try {
    // Evaluate the expression in the display
    box2.value = eval(box2.value);
  } catch (error) {
    box2.value = 'Error'; // Display 'Error' if invalid input
  }
}


  