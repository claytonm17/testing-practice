function capitalize(string) {
    let text = string.split('');
    text[0] = text[0].toUpperCase();
    return text.join('');
  }

module.exports = capitalize;