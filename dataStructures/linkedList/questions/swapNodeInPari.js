//https://leetcode.com/problems/swap-nodes-in-pairs/description/

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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let preHead = new ListNode(0, head); // create a Node and next pointed to head
  let cur = head; // create cur pointer at head
  let pre = preHead; // create pre pointer at preHead

  // both piar is not null
  while (cur && cur.next) {
    let second = cur.next; // save the second node (cur is at the first node now)
    let nextPair = cur.next.next; // save the frist node of next pair

    second.next = cur; // second => frist
    cur.next = nextPair; // first => third (first of next pair)
    pre.next = second; // swap the frist pointer to new head

    pre = cur; // pre stop at second node of current paris (cur is new second after swap)
    cur = nextPair; // move the cur to first node
  }

  return preHead.next; // next of dummy is the head
};
