const analyzeArray = require("./analyzeArray");
// Take an array and return object containing average, min, max, and length

test('Expect input of [1,8,3,4,2,6] to return avg: 4, min: 1, max: 8, length: 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
});

test('Expect input of [16,17,18,19,20] to return avg: 18, min: 16, max: 20, length: 5', () => {
    expect(analyzeArray([16,17,18,19,20])).toStrictEqual({
        average: 18,
        min: 16,
        max: 20,
        length: 5
      })
});