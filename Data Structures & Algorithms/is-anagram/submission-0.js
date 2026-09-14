class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hash1 = new Map();
        const hash2 = new Map();
        if(s.length !== t.length){
            return false;
        }

        for(const char of s){
            hash1.set(char, (hash1.get(char) || 0) +1)
        }

        for(const char of t){
            hash2.set(char, (hash2.get(char) || 0) +1)
        }
        
        if(hash1.size !== hash2.size) return false;

        for(const [char, count] of hash1){
            if(hash2.get(char) !== count){
                return false
            }
        }
        return true;
    }
}
