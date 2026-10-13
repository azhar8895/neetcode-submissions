class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};
        const result = [];

        for(let i=0; i< strs.length;i++){
            const anagramSig = this.returnAnagramSignature(strs[i]);
            if(hashMap[anagramSig]){
                hashMap[anagramSig] = [...hashMap[anagramSig], strs[i]];
            }
            else
                hashMap[anagramSig] = [strs[i]];
        }

        return Object.values(hashMap).reduce(
            (acc, next) => {
                return [...acc, next];
            },
            []
        )
    }

    returnAnagramSignature(str){
        let count = new Array(26).fill(0);
        for(let s of str){
            count[s.charCodeAt() - 'a'.charCodeAt()]++;

        }
        return count.join(",");
    }
}
