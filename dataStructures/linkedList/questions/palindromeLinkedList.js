//Given the head of a singly linked list, return true if it is a palindrome.
//https://leetcode.com/problems/palindrome-linked-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Using the stack to keep all values and compare.
// Time O(N) Space O(N)
const isPalindrome = function (head) {
  if (head == null || head.next == null) {
    return true;
  }

  let curr = head;
  let stack = [];

  while (curr != null) {
    stack.push(curr.val);
    curr = curr.next;
  }

  while (head != null) {
    if (head.val !== stack.pop()) {
      return false;
    }
    head = head.next;
  }

  return true;
};

// Using fast and slow pointer to find the middle of the linkedList.
// Additional space is reduce by half.
const isPalindrome = (head) => {
  if (head == null || head.next == null) {
    return true;
  }
  let stack = [];
  let fp = head;
  let sp = head;

  // find the mid point.
  while (fp.next != null && fp.next.next != null) {
    fp = fp.next.next;
    sp = sp.next;
  }

  // push the right hand side of val into stack.
  while (sp.next != null) {
    sp = sp.next;
    stack.push(sp.val);
  }

  // compared the values
  sp = head;
  while (stack.length) {
    if (stack.pop() !== sp.val) {
      return false;
    }
    sp = sp.next;
  }
  return true;
};

// reverse the right half of linkedList and compared.
// only need Space O(1)
const isPalindrome = (head) => {
  if (head == null || head.next == null) {
    return true;
  }
  let n1 = head;
  let n2 = head;

  // find the mid point.
  while (n1.next != null && n1.next.next != null) {
    n1 = n1.next.next; // to end
    n2 = n2.next; // to mid
  }

  n1 = n2.next; // first node of the right half
  n2.next = null; // mid point to null

  // reverse the right half of the linked list
  let n3 = null; // need additional pointer for reverse

  while (n1 != null) {
    n3 = n1.next;
    n1.next = n2;
    n2 = n1;
    n1 = n3;
  }

  // after reverse n2 will be pointed at the last node
  n3 = n2; // save the last node
  n1 = head; // set n1 to head
  let result = true;

  //compare left to right
  while (n1 != null && n2 != null) {
    if (n1.val !== n2.val) {
      result = false;
      break;
    }
    n1 = n1.next;
    n2 = n2.next;
  }

  n1 = n3.next; // save next node of right end before
  n3.next = null; // set the right last node to null

  // reverse the list back
  while (n1 != null) {
    n2 = n1.next;
    n1.next = n3;
    n3 = n1;
    n1 = n2;
  }

  return result;
};
