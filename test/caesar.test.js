const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("encoding and decoding messages with nonalphabetical symbols", () => {
    it("should encode and decode a message with nonalphabetical symbols", () => {
      const message = "Decoder ring!987";
      const shift = 3;
      const encoded = caesar(message, shift);
      const expected = "ghfrghu ulqj!987"
      const decoded = caesar(encoded, shift, false);

      expect(encoded).to.equal(expected);
      expect(decoded).to.equal(message.toLowerCase());
    });
  });

});
