function cipher(string, shift) {
    string = string.toUpperCase();
    const chars = string.split("");
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = "";

    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        
        if (char.match(/[A-Z]/)) {
            let index = alphabet.indexOf(char);
            let newIndex = (index + shift) % 26;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }
    return result;
}

module.exports = cipher;