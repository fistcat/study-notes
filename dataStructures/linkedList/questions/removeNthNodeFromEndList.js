//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let fp = head; // create fast pointer

  while (n > 0) {
    // fast pointer move by n times
    fp = fp.next;
    n--;
  }

  if (!fp) {
    // if fast pointer reached end => n = size of list => remove head
    return head.next;
  }

  let sp = head; // create slow pointer
  while (fp.next) {
    // move both pointer together which will make the slow pointer land on the delete node.
    fp = fp.next;
    sp = sp.next;
  }

  sp.next = sp.next.next; // change the next pointer
  return head;
};
