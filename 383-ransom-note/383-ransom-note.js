/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // return true if ransomnote can be made from magazine string
    // create a hashmap that will store the letter count from magazine 
    // iterate through ransomnote and every time a letter from random note appears, we can subtract the value from magazine 
    // if the value ever hits -1 in magazine return false
    // otherwise true
    
    let magazineLetterCount = {};

  for (let i = 0; i < magazine.length; i++) {
    if (magazineLetterCount[magazine[i]]) {
      magazineLetterCount[magazine[i]] += 1;
    } else {
      magazineLetterCount[magazine[i]] = 1;
    }
  }

  for (let letter of ransomNote) {
    if (letter in magazineLetterCount) {
      magazineLetterCount[letter] -= 1;
      if (magazineLetterCount[letter] === -1) return false;
    } else {
      return false;
    }
  }
  return true;
};