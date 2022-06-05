/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // we can create 2 variables, a slow and a fast pointer 
    // they both start at the head and move at different speeds throughout the list 
    // since the fast pointer will always reach the end of the list before the slow we can check for its presence in a loop and while it's still present we increment each pointer by 1 and 2 nodes respectively 
    // when the fast node no longer exists, we exit the loop and we can return the slow pointer since this end up being the middle of the list
    
    let slow = head 
    let fast = head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};