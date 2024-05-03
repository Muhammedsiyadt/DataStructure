
const nums = [2, 8, 7, 11, 15]
const target = 9
for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
        if(nums[i] + nums[j] == target){
            // console.log(`${nums[i]} + ${nums[j]} =  ${nums[i] + nums[j]}`)  // Printing all 
            console.log([i,j]); // only indexes in an array
            // console.log(i,j); // only index 
        }
    }
}