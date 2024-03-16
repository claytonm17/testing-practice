function reverse(string) {
    let chars = string.split('');
    chars.reverse();
    let rev = chars.join('');
    return rev;
}

module.exports = reverse;