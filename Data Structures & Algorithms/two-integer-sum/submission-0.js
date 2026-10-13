class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};
        let result = [];

        for(let i = 0;i< nums.length; i++){
            const diff = target - nums[i];
            if(hashMap.hasOwnProperty(nums[i])){
                 result = [hashMap[nums[i]], i];
            }
            else{
                hashMap[diff] = i;
            }
        }
        return result
    }
}
