// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {


  function substitution(input, alphabet, encode = true) {
    //if alphabet is missing or not 26 characters, return false
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    //if substitution alphabet has duplicates, return false
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.lastIndexOf(alphabet[i]) !== i) {
        return false;
      }
    }
    const standard = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    let result = "";
    //if encode, loop through input
    if (encode) {
      for (let letter of input) {
    // maintain spaces
        if (letter == " ") {
          result += " ";
        } else {
    // find character in substitution alphabet that matches index of standard
          let index = standard.indexOf(letter);
          result += alphabet[index];
        }
      }
    }
    //if decoding
    else {
      for (let letter of input) {
        if (letter == " ") {
          result += " ";
        } else {
    // vice versa
          let index = alphabet.indexOf(letter);
          result += standard[index];
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
