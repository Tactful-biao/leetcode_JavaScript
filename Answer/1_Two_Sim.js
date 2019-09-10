/*
	Given an array of integers, return indices of the two numbers such that they add up to a specific target.

	You may assume that each input would have exactly one solution, and you may not use the same element twice.

	Example:

	Given nums = [2, 7, 11, 15], target = 9,

	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].
*/
/*
//方法一: 常规方法
var twoSum = function(nums, target) {
	var len = nums.length;
	for(var i = 0; i < len; i++) {
		for (var j = i+1; j < len; j++){
			if (nums[i] + nums[j] == target) {
				return [i, j]
			}
		}
	}
};
*/

// 方法二
// 这是一个加法问题 
// 加数1 + 加数2 = 和
// 通过循环把 (和 - 加数1) 得到的结果 放到comp对象里面，把结果和索引对应起来
// comp = {
//	  "7" : 0,
// 	  "8": 1,
// }
// 当加数2能在comp中取出索引来的时候，说明该加数于索引位置上的另一个加数的和刚好等于target

var twoSum = function(nums, target){
	const comp = {};
	var len = nums.length;
	for(let i = 0; i < len; i++) {
		if (comp[nums[i]] >= 0){
			return [comp[nums[i]], i];
		}
		comp[target - nums[i]] = i;
	}
}


var nums = [2, 1, 7, 15],
	target = 9;

console.log(twoSum(nums, target));