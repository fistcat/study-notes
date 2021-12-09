//https://leetcode.com/problems/merge-two-sorted-lists/description/
// Time O(l1+l2); space O(1)
var mergeTwoLists = function (l1, l2) {
  let cur = new ListNode(0); // create a dummy and assgin current pointer to it
  let head = cur; // save the dummy ponter refence

  while (l1 || l2) {
    // when either one of list isn't reached to end
    if (!l1) {
      // assigin node from l2 when l1 is empty
      cur.next = l2;
      l2 = l2.next;
    } else if (!l2) {
      // assigin node from l1 when l2 is empty
      cur.next = l1;
      l1 = l1.next;
    } else if (l1.val > l2.val) {
      // assigin l2 when l1 val is bigger
      cur.next = l2;
      l2 = l2.next;
    } else {
      // assigin l1 when l1 val is smaller
      cur.next = l1;
      l1 = l1.next;
    }
    cur = cur.next; // advance current pointer
  }

  return head.next; // return next node of dummy pointer
};
