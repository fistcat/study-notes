const reverseList = (head) => {
  let pre = null;
  let cur = head;
  let next = null;

  while (cur !== null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};

const reverseList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  let reverseListHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reverseListHead;
};
