const calculator = require("./calculator");

test('5 add 3 to equal 8', () => {
    expect(calculator.add(5,3)).toBe(8);
});

test('9 subtract 4 to equal 5', () => {
    expect(calculator.subtract(9,4)).toBe(5);
});

test('5 multiply 4 to equal 20', () => {
    expect(calculator.multiply(5,4)).toBe(20);
});

test('10 divide 2 to equal 5', () => {
    expect(calculator.divide(10,2)).toBe(5);
});