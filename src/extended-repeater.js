const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,opt) {
  if (typeof str != 'string') {
    String(str);
      }
      let strAdd;
      let strResult = [];
      let repeatTimes = opt.repeatTimes;
      let separator = opt.separator;
     
      let additionSeparator = opt.additionSeparator;
      let additionRepeatTimes = opt.additionRepeatTimes;
    
      let addition = String(opt.addition);
      
      if(separator === undefined) {
        separator = '+';
      }
      if(repeatTimes === undefined ) {
        repeatTimes = 1;
      }
    
      if(additionRepeatTimes === undefined) {
        additionRepeatTimes = 1;
      } 
      let additionRepeat = '';
      for(let i=0; i< additionRepeatTimes; i++) {
        
      if(i != 0 && i <= additionRepeatTimes-1) {
        additionRepeat += additionSeparator+addition;
      } else {
        additionRepeat += addition;
      }
      }
      if(additionRepeat === undefined) {
        addition = '';
      }
      if(addition === undefined) {
        addition = '';
      }
      if(additionSeparator === undefined) {
        additionSeparator = '';
      }
     
    
    
      for (let i = 1; i <= repeatTimes; i++) {
       
        strAdd = `${str}${additionRepeat}`;
        strResult.push(strAdd);
      }
      return strResult.join(separator);
};
  