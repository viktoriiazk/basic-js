const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  
 const ears =cats.flat();
 const result = ears.filter(ear => ear == '^^');
 return result.length;

  throw new CustomError('Not implemented');
  // remove line with error and write your code here

};
