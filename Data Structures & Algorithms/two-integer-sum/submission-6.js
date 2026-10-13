class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};

        for(let i = 0;i< nums.length; i++){
            if(hashMap[nums[i]] !== undefined){
                 return [hashMap[nums[i]], i];
            } else {
                const diff = target - nums[i];
                hashMap[diff] = i;
            }
        }
        return [];
    }
}
