/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */


// Definition for singly-linked list.
function ListNode(val, next) {
	// this = ListNode.prototype
    this.val = val;
    this.next = next;
    // return this
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 通过l1 和 l2 数字对应相加
// 如果结果大于10，则减去10保留个位数，然后进位total置为1
// 通过ListNode把结果保存进入即可.

var addTwoNumbers = function(l1, l2) {
	let total = 0,
		count,
		link = new ListNode(-1),
		res = link;

	while(l1 !== null && l2 !== null){
		count = l1.val + l2.val + total;
		total = 0;
		if (count >= 10){
			count -= 10;
			total = 1;
		}
		res.next = new ListNode(count);
		res = res.next;
		l1 = l1.next;
		l2 = l2.next;
	}
	console.log(link.next);
};

var l1 = new ListNode(7, new ListNode(2, new ListNode(4,  null)));
var l2 = new ListNode(5, new ListNode(9, new ListNode(3, null)));

addTwoNumbers(l1, l2);