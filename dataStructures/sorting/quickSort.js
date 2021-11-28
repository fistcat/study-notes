// Qucik Sort
// Time: O(n*log^n) Space: O(n)
// the key is create three zone based on a random selective number and create three zone < = and > selective num.

const quickSort = (array) => {
  if (array == null || array.length < 2) {
    return array;
  }
  return process(array, 0, array.length - 1);
};

const process = (array, L, R) => {
  if (L < R) {
    // choose a random number to be sorted. number is choosed randomly to avoid the worst case input ( i.e. all number is a sorted and always pick the last number of array)
    // which will make the time complex to be O(n^2)

    swap(array, L + Math.round(Math.random(R - L + 1)), R);
    // divied the '<' '>' and '=' zone and get back the pointer of the both side of '=' zone
    let [equalLeft, equalRight] = partiton(array, L, R);

    process(array, L, equalLeft - 1); // 1 index before the = zone is < zone's upper boundray
    process(array, equalRight + 1, R); // 1 index after the = zone is > zone's lower boundray
  }
};

const partiton = (array, L, R) => {
  console.log("before: ", array, "L: ", L, "R: ", R);
  let less = L - 1;
  let more = R;
  while (L < more) {
    if (array[L] < array[R]) {
      swap(array, ++less, L++);
    } else if (array[L] > array[R]) {
      swap(array, --more, L);
    } else {
      L++;
    }
  }
  console.log("before swap: ", array, "R: ", R, "more: ", more);
  swap(array, more, R);
  console.log("after: ", array, "Less: ", less, "more: ", more);
  return [less + 1, more];
};

//swap item
const swap = (array, i, j) => {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const test = [4, 2, 4, 6, 4, 5];
quickSort(test);

const ar = [];
