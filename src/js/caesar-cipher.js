const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function caesarCipher(string, num) {
  if (!validArguments(string, num)) {
    return "Invalid arguments.";
  }
  const letters = string.split("");
  let result = [];
  for (let i = 0; i < letters.length; i++) {
    let index = alphabet.indexOf(letters[i].toLowerCase());
    // don't convert non a-z characters
    if (index === -1) {
      result.push(letters[i]);
      continue;
    }
    // shift letter by num amount
    for (let j = 0; j < num; j++) {
      index++;
      if (index === 26) index = 0;
    }
    // handle upper case letters
    if (letters[i] === letters[i].toUpperCase()) {
      result.push(alphabet[index].toUpperCase());
    } else {
      result.push(alphabet[index]);
    }
  }
  return result.join("");
}

function validArguments(string, num) {
  if (typeof string !== "string") {
    return false;
  } else if (typeof num !== "number") {
    return false;
  } else {
    return true;
  }
}

export default caesarCipher;
