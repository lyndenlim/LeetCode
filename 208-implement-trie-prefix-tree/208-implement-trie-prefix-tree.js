
var Trie = function() {
    this.trie = []
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.trie.push(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    for (let i = 0; i < this.trie.length; i++) {
        if (this.trie[i] === word) {
            return true
        }
    }
    return false
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    for (let i = 0; i < this.trie.length; i++) {
        if (this.trie[i].slice(0,prefix.length) === prefix) {
            return true
        }
    }
    return false
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */