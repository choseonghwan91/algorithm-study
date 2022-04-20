// 데이터의 범위 만큼 배열을 만들고, 카운트한다.
// 상대적으로 공간 복잡도가 큼
// 동일한 값을 가지는 데이터가 여러 개 등장할때 효과적

let array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

function solution(arr) {
  let dumi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    dumi[arr[i]]++;
  }

  for (let j = 0; j < dumi.length; j++) {
    for (let k = 0; k < dumi[j]; k++) {
      result = [...result, j];
    }
  }
  return result;
}

console.log(solution(array));
