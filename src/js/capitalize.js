function capitalize(string) {
  let characters = string.trim().split("");
  characters[0] = characters[0].toUpperCase();
  return characters.join("");
}

module.exports = capitalize;
