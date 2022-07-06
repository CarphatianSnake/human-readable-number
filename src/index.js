module.exports = function toReadable(number) {
  const digitToWord = (n) => {
    switch (n) {
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven'
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        return '';
    }
  }

  let arr = number.toString().split('')
                    .map((item, i) => i === 0 ? digitToWord(item) + ' hundred' : i === 1 ? digitToWord(item) + 'ty' : digitToWord(item))
                    .map(item => item === 'fourty' ? 'forty' : item)
                    .map(item => item === 'threety' ? 'thirty' : item)
                    .map(item => item === 'twoty' ? 'twenty' : item)
                    .map(item => item === 'fivety' ? 'fifty' : item)
                    .join(' ');

  const secondConvert = (string) => {
    return string.includes('onety one') ? string.replace('onety one', 'eleven') :
    string.includes('onety two') ? string.replace('onety two', 'twelve') :
    string.includes('onety three') ? string.replace('onety three', 'thirteen') :
    string.includes('onety four') ? string.replace('onety four', 'fourteen') :
    string.includes('onety five') ? string.replace('onety five', 'fifteen') :
    string.includes('onety six') ? string.replace('onety six', 'sixteen') :
    string.includes('onety seven') ? string.replace('onety seven', 'seventeen') :
    string.includes('onety eight') ? string.replace('onety eight', 'eighteen') :
    string.includes('onety nine') ? string.replace('onety nine', 'nineteen') :
    string.includes(' ty') ? string.replace(' ty', '') :
    string;
  }

  return secondConvert(arr);
}