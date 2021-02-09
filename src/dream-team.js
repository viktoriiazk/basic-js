const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (typeof members === 'object' && members !== null && Array.isArray(members)) {
    let names = members.filter(name => typeof name === 'string');
    let firstChar = [];
    let upper = [];
    if (names.length != 0) {
      names.forEach(element => {
        let withOutSpace = element.replace(/\s/g, '');
        firstChar.push(withOutSpace.charAt(0, 1));
      });
      firstChar.forEach(el => {
        upper.push(el.toUpperCase());
      });
      return upper.sort().join('');
    } else {
      return false;
    }

  } else {
    return false;
  }
  throw new CustomError('Not implemented');
};
