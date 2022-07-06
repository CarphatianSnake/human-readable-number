module.exports = function toReadable(number) {
  if (number === 0) return 'zero';
  const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let str = '';
  if (number > 99) {
    str += a[Math.floor(number / 100)] + ' hundred ';
    number = +number.toString().slice(1);
  }
  if (number > 19) {
    str += b[Math.floor(number / 10)] + ' '
    number = +number.toString().slice(1);
  }
  str += a[number];
  return str.trim();
}