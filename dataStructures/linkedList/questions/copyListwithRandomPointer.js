// one eaiser way to do is create a Map and put each node as key and new copy node as value.
// the downside of doing that is that will required addtional space O(N).
// Better approch is create a new copy node and connect with original node. using the next pointer to connet the random pointer.

//https://leetcode.com/problems/copy-list-with-random-pointer/
const copyRandomList = function (head) {
  if (head == null) {
    return null;
  }

  let next = null;
  let curr = head;

  while (curr != null) {
    next = curr.next; // save next
    curr.next = new Node(curr.val, next, null); // create a copy node and udpate the next pointer
    curr = next; // moving to next
  }

  curr = head;
  let currCopy = null;

  // treat one node and one copy node as a pair and update random.next
  while (curr != null) {
    next = curr.next.next; // save the next of original list
    currCopy = curr.next; // get the copy node
    currCopy.random = curr.random != null ? curr.random.next : null; // assigin the copy's random with reference of curr.random.next. need null check in case the random is null
    curr = next; // advance pointer
  }
  curr = head;
  let newHead = head.next;

  // change the list back
  while (curr != null) {
    next = curr.next.next; // save the next of next pairs
    currCopy = curr.next; // get copy node
    curr.next = curr.next.next; // change back to original next
    currCopy.next = next != null ? next.next : null; // reconnect the new copy node with null check
    curr = next; // advance to next pair
  }
  return newHead;
};
