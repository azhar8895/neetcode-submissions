class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const stringMap = {};

        for(let c of s){
            if(stringMap[c]){
                stringMap[c] += 1;
            } else{
                stringMap[c] = 1
            }
        }
        for(let c of t){
            if(stringMap[c]){
                stringMap[c] -= 1;
            }
        }

        return  Object.values(stringMap).reduce((acc, next) =>{return  acc + next}, 0) === 0;;
    }
}
