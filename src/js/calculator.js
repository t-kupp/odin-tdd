function checkArguments(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return true;
  }
}

function add(a, b) {
  if (!checkArguments(a, b)) {
    return "Arguments are invalid.";
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  if (!checkArguments(a, b)) {
    return "Arguments are invalid.";
  } else {
    return a - b;
  }
}

function multiply(a, b) {
  if (!checkArguments(a, b)) {
    return "Arguments are invalid.";
  } else {
    return a * b;
  }
}

function divide(a, b) {
  if (!checkArguments(a, b)) {
    return "Arguments are invalid.";
  } else {
    return a / b;
  }
}

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

module.exports = calculator;
