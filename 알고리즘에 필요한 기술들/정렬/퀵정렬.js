let array = [5, 16, 20, 7, 9, 0, 3, 15, 14, 1, 6, 2, 4, 11, 12, 8];

function solution(arr, start, end) {
  if (start >= end) return;
  pivot = start;
  left = start + 1;
  right = end;

  while (left <= right) {
    let temp;
    while (left <= end && arr[left] <= arr[pivot]) {
      left++;
    }
    while (right > start && arr[right] >= arr[pivot]) {
      right--;
    }
    if (left > right) {
      temp = arr[right];
      arr[right] = arr[pivot];
      arr[pivot] = temp;
    } else {
      temp = arr[left];
      arr[left] = arr[pivot];
      arr[pivot] = temp;
    }
  }
  solution(arr, start, right - 1);
  solution(arr, right + 1, end);

  return arr;
}

console.log(solution(array, 0, array.length - 1));
