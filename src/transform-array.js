const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
    const discNext = '--discard-next';
    const discPrev = '--discard-prev';
    const doubleNext = '--double-next';
    const doublePrev = '--double-prev';
    const newArr = [];

    if (typeof arr === 'object') {
        arr.map((el, index, arr) => {

            if (el == doubleNext) {
                el = arr[index + 1];
                return newArr.push(el);
            } else if (el == doublePrev) {
                el = arr[index - 1];
            } else if (el == discNext) {
                return arr.splice(el, 1);
            }
            else if (el == discPrev) {
                el = arr[index - 1];
                return newArr.pop();
            } else {
                newArr.push(el);
            } 
        });

    } else {
        throw new Error('Error');
    }
    return newArr.filter(el=> el!== undefined);


};
