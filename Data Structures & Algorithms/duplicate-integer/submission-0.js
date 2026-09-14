class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seenHash = new Set();

        for (const num of nums){
            if(seenHash.has(num)){
                return true;
            }
            seenHash.add(num);
        }
        return false;
    }
}
