const cipher = require("./caesarCipher");

test('Expect "Archie" to be encrypted as "DUFKLH" wiht a shift of 3', () => {
    expect(cipher("Archie", 3)).toBe("DUFKLH");
});

test('Expect "Ohio State" to be encrypted as "EXYE IJQJU" with shift of 16', () => {
    expect(cipher("Ohio State", 16)).toBe("EXYE IJQJU");
});

test('Expect "10 Coffees" to be encrypted as "10 SEVVUUI" with a shift of 16', () => {
    expect(cipher("10 Coffees", 16)).toBe("10 SEVVUUI");
});

test('Expect "2014" to be encrypted as "2014" with a shift of 8', () => {
    expect(cipher("2014")).toBe("2014");
});

test('Expect "CaESER SAlaD" to be encrypted as "HFJXJW XFQFI" with a shift of 5', () => {
    expect(cipher("CaESER SAlaD", 5)).toBe("HFJXJW XFQFI");
});