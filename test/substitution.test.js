const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() cipher", () => {
  it("should return false if the substitution alphabet does not contain exactly 26 characters", () => {
    const actual = substitution("hello world", "xoyqmcgrukswaflnthdjpzibe");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicates in the substitution alphabet", () => {
    const actual = substitution("hello world", "xooqmcgrukswaflnthdjpzibev");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters.", () => {
    const actual = substitution("CapitaL","xoyqmcgrukswaflnthdjpzibev");
    const expected = "yxnujxw";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces.", () => {
    const actual = substitution("maintain spaces","xoyqmcgrukswaflnthdjpzibev");
    const expected = "axufjxuf dnxymd";
    expect(actual).to.equal(expected);
  });
  it("should correctly encode the input with the substitution alphabet given.", () => {
    const actual = substitution("substitution decoder","xoyqmcgrukswaflnthdjpzibev");
    const expected = "dpodjujpjulf qmylqmh";
    expect(actual).to.equal(expected);
  });
});