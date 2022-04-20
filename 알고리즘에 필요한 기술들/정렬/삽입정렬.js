// 이미 거의 정렬되어 있을때 사용하면 좋음

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function solution(arr) {
  let result = arr;
  for (let i = 0; i < result.length; i++) {
    for (let j = i; j > 0; j--) {
      let temp;
      if (result[j] < result[j - 1]) {
        temp = result[j];
        result[j] = result[j - 1];
        result[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return result;
}

console.log(solution(array));
