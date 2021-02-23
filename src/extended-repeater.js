const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,opt) {
  if (typeof str != 'string') {
    String(str);
}
let strAdd;
let strResult = [];
let repeatTimes = opt.repeatTimes;
let separator = opt.separator;
let additionRepeatTimes = opt.additionRepeatTimes;
let addition = opt.addition;

if (separator === undefined) {
    separator = '+';
} else {
    separator = opt.separator;
}
if (repeatTimes === undefined) {
    repeatTimes = 1;
}
let additionSeparator = opt.additionSeparator;
if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
}
let additionRepeat = '';
if (typeof addition === 'undefined') {
    addition = '';
}
addition = String(addition);

if (additionRepeat === undefined) {
    addition = '';
}
for (let i = 0; i < additionRepeatTimes; i++) {

    if (i != 0 && i <= additionRepeatTimes - 1) {
        additionRepeat += additionSeparator + addition;
    } else {
        additionRepeat += addition;
    }
}

if (additionSeparator === undefined) {
    additionSeparator = '';
}

for (let i = 1; i <= repeatTimes; i++) {

    strAdd = `${str}${additionRepeat}`;
    strResult.push(strAdd);
}
return strResult.join(separator);
};
  