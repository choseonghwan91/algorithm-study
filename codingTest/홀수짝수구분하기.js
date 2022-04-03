// [6,3,4,5] 라는 함수가 주어지면 좌측에 짝수, 우측에 홀수가 모이도록 정리해야 된다.
// 바꿔서 정렬한다고 할때 최소로 바꾸는 수를 리턴해라
// 3,4를 바꾸면 [6,4,3,5] 가 되기 때문에 짝수와 홀수가 구분 됨
// 그렇기 때문에 1을 리턴 해주면 됨
// ex1
// 입력
// [5,2,4,7,3,7,2,5,8,2,5,6]

// 출력 4
// [6,2,4,7,3,7,2,5,8,2,5,5]
// [6,2,4,2,3,7,2,5,8,7,5,5]
// [6,2,4,2,8,7,2,5,3,7,5,5]
// [6,2,4,2,8,2,7,5,3,7,5,5]

function solution(arr) {
  let count = 0;
  let frontNum = 0;
  let backNum = arr.length - 1;
  getCount();
  function getCount() {
    if (frontNum < backNum) {
      frontNum = findOddNum(arr, frontNum);
      backNum = findEvenNum(arr, backNum);
      count++;
      getCount();
    } else {
      return;
    }
  }

  return count;

  function findOddNum(array, front) {
    for (let i = front; i < array.length; i++) {
      if (array[i] % 2 !== 0) return i + 1;
    }
  }

  function findEvenNum(array, back) {
    for (let j = back; j > 0; j--) {
      if (array[j] % 2 === 0) return j - 1;
    }
  }
}

// console.log(solution([5, 2, 4, 7, 3, 7, 2, 5, 8, 2, 5, 6]));
// console.log(solution([6, 3, 4, 5]));
// console.log(solution([49,28,10,34,21,55,43]));
console.log(solution([3, 1, 2, 7, 8, 7, 5, 4, 6, 8, 10]));
