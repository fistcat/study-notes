// Partition List
// https://leetcode.com/problems/partition-list/submissions/

// LinkedList partitiion can be done in easier way by put every node into array and doing partition inside the array
// then connect every elements in array after partition to form new list. however this will take Space of O(N) due to created new array.

// using pointers to breaks input LinkedList into three LinkedLists with each contain samller equal and bigger section
// after pratition is done, connect samller, equal and bigger section into on LinkedList.
// Only using 7 constant pointer -->  Space O(N)
const partitionLinkedList = (head, pivot) => {
  let sh = null; // head of smaller section
  let st = null; // tail of samller section
  let eh = null; // head of equal section
  let et = null; // tail of equal section
  let bh = null; // head of bigger section
  let bt = null; // tail of bigger section
  let next = null; // save of next node

  while (head != null) {
    // when current node is not null
    next = head.next; // save next node
    head.next = null; // make the next node to null

    if (head.value < pivot) {
      if (sh === null) {
        // samller sections is empty set both head and tail to the node
        sh = head;
        st = head;
      } else {
        st.next = head; // add new samller node to the current tail.next
        st = head; // move the current samller tail to new joined node
      }
    } else if (head.value === pivot) {
      // similar logic but checking for equal sections
      if (eh === null) {
        eh = head;
        et = head;
      } else {
        et.next = head;
        et = head;
      }
    } else {
      // similar logic but checking the bigger section
      if (bh === null) {
        bh = head;
        bt = head;
      } else {
        bt.next = head;
        bt = head;
      }
    }
    head = next;
  }

  //re-join list

  if (st !== null) {
    st.next = eh; // connect samller section to equal section
    et = et === null ? st : et; // check if equal section is present. if not use the smaller section tail to connect bigger section instead
  }

  if (et !== null) {
    // either have samller or equal section
    et.next = bh; // conect to bigger section
  }

  return sh !== null ? sh : eh !== unll ? eh : mh; // decide which pointer is the new head
};
