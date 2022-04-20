let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp;
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
  return arr;
}

console.log(solution(array));
