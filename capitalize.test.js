const capitalize = require('./capitalize.js');
// Goal === take string and return with first character capital

test('test should become Test', () => {
  expect(capitalize('test')).toBe('Test');
});

test('Test should become Test', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('TEST should become TEST', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('37 should become 37', () => {
  expect(capitalize('37')).toBe('37');
});

test('pYTHON should become PYTHON', () => {
  expect(capitalize('pYTHON')).toBe('PYTHON');
});

test('007agent should become 007agent', () => {
  expect(capitalize('007agent')).toBe('007agent');
});