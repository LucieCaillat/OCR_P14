export function addLeadingZeros(n, length) {
  var str = (n > 0 ? n : -n) + "";
  var zeros = "";
  for (var i = length - str.length; i > 0; i--) zeros += "0";
  zeros += str;
  return n >= 0 ? zeros : "-" + zeros;
}
