/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
     let arrElems = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (arrElems.has(arr[i])) return true;
    arrElems.add(arr[i] / 2);
    arrElems.add(arr[i] * 2);
  }
  return false;
};