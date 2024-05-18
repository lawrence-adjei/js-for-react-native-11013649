function processArray(arr) {
 
    return arr.map(num => {
        if (num % 2 === 0) {
           
            return num * num;
        } else {
           
            return num * 3;
        }
    });
}
function formatArrayStrings(stringArr, processedArr){
 
 return stringArr.map((str.index) => {
  return processedArr[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}


module.exports = {
    processArray,
 formatArrayStrings
};
