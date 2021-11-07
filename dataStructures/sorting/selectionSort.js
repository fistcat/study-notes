// Selection Sort O(n^2)
// Time: O(n^2) Space: O(1)
// 1. iterate through array and find the smallest number's index.
// 2. swap the smallest with current i index values.

const selectionSort = (array) => {
  if (array == null || array.length < 2) {
    return array;
  }

  for (let i = 0; i < array.length - 1; i++) {
    // skip the last i index because j will start at i+1.
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

const testArray = [3, 7, 2, 2, 4, 3, 7, 6];

console.log(selectionSort(testArray));
