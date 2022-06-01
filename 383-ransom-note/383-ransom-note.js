/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letterCountMagazine = {};

  for (let i = 0; i < magazine.length; i++) {
    if (letterCountMagazine[magazine[i]]) {
      letterCountMagazine[magazine[i]] += 1;
    } else {
      letterCountMagazine[magazine[i]] = 1;
    }
  }

  for (let i of ransomNote) {
    if (i in letterCountMagazine) {
      letterCountMagazine[i] -= 1;
      if (letterCountMagazine[i] === -1) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};