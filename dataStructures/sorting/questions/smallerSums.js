// Find the small sum of each number inside an unsorted array.
// A small sum of an item (index = i) is all the left items(index < i) that is smaller than current item.
// samll sum of input array is collection of all samll sum of each item.
// e.x.
// sample input array [1,3,4,2,5]
// output = 0 + 1 + (1+3) + 1 + (1+3+4+2) = 16

// Soultion: use merged sort and calculate the sum while sorting.
// Time: O(n*log(n)) , Sapce: O(n)

const findSamllSums = (array) => {
  if (array == null || array.length < 2) {
    return 0;
  }
  return process(array, 0, array.length - 1);
};

const merge = (array, l, m, r) => {
  let temp = [];
  let res = 0;
  let i = 0;
  let p1 = l;
  let p2 = m + 1;
  while (p1 <= m && p2 <= r) {
    res += array[p1] < array[p2] ? array[p1] * (r - p2 + 1) : 0;
    temp[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++];
  }
  while (p1 <= m) {
    temp[i++] = array[p1++];
  }
  while (p2 <= r) {
    temp[i++] = array[p2++];
  }
  for (let i = 0; i < temp.length; i++) {
    array[l + i] = temp[i];
  }
  return res;
};

const process = (array, l, r) => {
  //base case
  if (l === r) {
    return 0;
  }

  const mid = Math.floor(l + (r - l) / 2);
  return (
    process(array, l, mid) +
    process(array, mid + 1, r) +
    merge(array, l, mid, r)
  );
};

const test = [1, 3, 4];
console.log(findSamllSums(test));
