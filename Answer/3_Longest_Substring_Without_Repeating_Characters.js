/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */

// 方法一 ： 简单粗暴法
// 不推荐，当字符串十分长的时候，效率极低。
var lengthOfLongestSubstring = function(s) {
    let 
    	str = '',
    	temp = '';
    for (let i in s){
    	let substring = s.slice(i, )
    	for (let j in substring) {
    		if (str.indexOf(substring[j]) === -1) {
    			str += substring[j];
    		} else {
    			break;
    		}
    	}
    	str.length >= temp.length ? temp = str : temp = temp;
    	str = '';
    }
    return temp.length;

};


// 方法二： 核心思想于方法三相同，只是方法三使用索引方式进行遍历，方法二使用循环方式。 在python中该方法速度较快
var lengthOfLongestSubstring2 = function(s) {
	let maxLength = 0,
		maxString = '';
	for (let i in s){
		if (maxString.indexOf(s[i]) >= 0) {
			while(true) {
				if (maxString[0] == s[i]) {
					maxString = maxString.slice(1,);
					maxString += s[i];
					break;
				} else {
					maxString = maxString.slice(1,);
				}
			}
		} else {
			maxString += s[i];
		}
		if (maxString.length > maxLength) {
			maxLength = maxString.length;
		}
	}
	return maxLength;
}

// 方法三 
// 速度较快
// 通过循环遍历每一个字符
// 把字符添加到maxSring上
// 如果发现重复字符
// 记录下重复字符在maxString中出现的索引位置
// 把从重复字符开始到当前位置i的所有字符赋值给maxString
// 判断maxString的长度和maxLength谁大，把大的赋值给maxString
// 继续查找，重复上面步骤
var lengthOfLongestSubstring3 = function(s) {
	let maxString = '';
	let maxLength = 0;
	let lastMatchedIndex = 0;
	for(let i=0; i<s.length; i++){
		const matchedIndex = maxString.indexOf(s[i]);
		maxString = maxString + s[i];
		if(matchedIndex >= 0){
			const lastMatchedIndex = s.substring(0, i-1).lastIndexOf(s[i]);
			maxString = (s[i] === s[i-1] ? s.substring(i-1, i) : s.substring(lastMatchedIndex+1, i+1));
		}
		if(maxString.length > maxLength){
			maxLength = maxString.length;
		}
	}
	console.log(maxLength)
	return maxLength;
};


let str = 'abcdgrmklgregvsdlkhsdkfja,.#@%#^I&*';
lengthOfLongestSubstring3(str);