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
  //throw an error if second argument is not a number
  if (typeof num !== "number") {
    return "Invalid arguments. Second argument needs to be a number.";
  }
  let letters = string.trim().split("");
  let result = [];
  for (let i = 0; i < letters.length; i++) {
    let index = alphabet.indexOf(letters[i]);
    //throw error if string contains characters not found in alphabet
    if (index === -1) {
      return "Invalid arguments. First argument valid characters: a-z.";
    }
    for (let j = 0; j < num; j++) {
      index++;
      if (index === 26) index = 0;
    }
    result.push(alphabet[index]);
  }
  return result.join("");
}

export default caesarCipher;