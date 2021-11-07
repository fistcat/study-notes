// Bubble Sort
// Time: O(n^2) Space: O(1)
// 1. start from 0 to n-1 and swap the bigger number to the right.
// 2. reduce the upper boundry since then swap from 0 to n-2

const bubbleSort = (array) => {
  if (array == null || array.length < 2) {
    return array;
  }
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        array[j] = array[j] ^ array[j + 1];
        array[j + 1] = array[j] ^ array[j + 1];
        array[j] = array[j] ^ array[j + 1];
      }
    }
  }
  return array;
};

const testArray = [3, 7, 2, 2, 4, 3, 7, 4, 4, 6];

console.log(bubbleSort(testArray));
