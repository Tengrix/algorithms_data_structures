const twoSum = (nums, target) => {
    const hash = new Map();
    for(let i = 0; i < nums.length; i++){
        if(hash.get(target - nums[i])!==undefined){
            let idx = hash.get(target - nums[i])
            return [i,idx]
        }else{
            hash.set(nums[i], i)
        }
    }
    return null;
}

console.log(twoSum([2,7,11,15],9))