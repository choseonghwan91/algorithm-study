function solution(arr1, arr2) {
  let result = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);

  for (let i = 0; i < 3; i++) {
    arr1[i] = arr2[i];
  }

  result = arr1.reduce((acc, pre) => acc + pre);

  return result;
}

const arr1 = [1, 2, 5, 4, 3];
const arr2 = [5, 5, 6, 6, 5];

console.log(solution(arr1, arr2));
