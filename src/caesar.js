// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  function caesar(input, shift, encode = true) {
    // checks conditions of shift
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // if encode is false, invert shift value
    if (!encode) {
      shift = shift * -1;
    }
    // separate the input into an array of characters, lowercased
    const inputArray = input.toLowerCase().split("");

    // loop through input array, return character not included in alphabet
    const result = inputArray.map(character => {
      if (!alphabet.includes(character)) {
        return character;
      }

    // if input does include characters, find index of character and apply shift value
    let index = alphabet.indexOf(character) + shift;
    
    // if less than 0 or greater than 25, wrap around alphabet
    if (index < 0) {
      index = index + 26;
    } else if (index > 25) {
      index = index - 26;
    }

    // return the shifted character
    return alphabet[index];
    });
    // combine separated characters into string
    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
