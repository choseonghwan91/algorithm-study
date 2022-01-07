// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

function solution(num) {
  let result = 0;
  if (num < 0) return "양수를 입력해 주세요";
  for (let i = 0; i <= num; i++) {
    if (num > 0) {
      result += i;
    }
  }
  return result;
}

console.log(solution(8));
