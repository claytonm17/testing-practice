const reverse = require('./reverse');
// Reverse the string

test('test should become tset', () => {
    expect(reverse('test')).toBe('tset')
});

test('complication should become noitacilpmoc', () => {
    expect(reverse('complication')).toBe('noitacilpmoc')
});

test('javascript should become tpircsavaj', () => {
    expect(reverse('javascript')).toBe('tpircsavaj')
});

test('1738 should become 8371', () => {
    expect(reverse('1738')).toBe('8371')
});

test('DiPLOmaTIc should become cITamOLPiD', () => {
    expect(reverse('DiPLOmaTIc')).toBe('cITamOLPiD')
});

test('CODING should become GNIDOC', () => {
    expect(reverse('CODING')).toBe('GNIDOC')
});