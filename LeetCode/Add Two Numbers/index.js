/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum;
    let head = new ListNode(0);
    let tail = head;
    while(l1 || l2 || carry!==0){
        sum = (l1? l1.val : 0) + (l2? l2.val : 0) + carry;
        carry = Math.floor(sum/10);
        tail.next = new ListNode(sum % 10);
        tail = tail.next
        l1 = l1? l1.next : null;
        l2 = l2? l2.next : null;
    }
    return head.next;
};