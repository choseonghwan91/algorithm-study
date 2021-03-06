// ### 문제

// 당신은 음식점의 계산을 도와주는 점원입니다. 카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한히 존재한다고 가정합니다. 손님에게 거슬러 주어야 할 돈이 N원일 때 거슬러 주어야 할 동전의 최소 개수를 구하세요. 단, 거슬러 줘야 할 돈 N은 항상 10의 배수입니다.

// ### 문제 해결 아이디어

// - 최적의 해를 빠르게 구하기 위해서는 가장 큰 화폐 단위부터 돈을 거슬러 주면 됩니다.
// - N원을 거슬러 줘야 할 때, 가장 먼저 500원으로 거슬러 줄 수 있을 만큼 거슬러 줍니다.
//   - 이후에 100원, 50원, 10원 짜리 동전을 차례대로 거슬러 줄 수 있을 만큼 거슬러 주면 됩니다.
// - N = 1,260일 때의 예시를 확인해 봅시다.

// ### 정당성 분석

// - 가장 큰 화폐 단위부터 돈을 거슬러 주는 것이 최적의 해를 보장하는 이유는 무엇일까요?
//   - 가지고 있는 동전 중에서 큰 단위가 항상 작은 단위의 배수이므로 작은 단위의 동전들을 종합해 다른 해가 나올 수 없기 때문입니다.
// - 만약에 800원을 거슬러 주어야 하는데 화폐 단위가 500원 400원 100원 이라면 어떻게 될까요?
// - 그리디 알고리즘 문제에서는 이처럼 문제 풀이를 위한 최사한의 아이디어를 떠올리고 이것이 정당한지 검토할 수 있어야 합니다.

// # 출처

// - https://www.youtube.com/watch?v=2zjoKjt97vQ&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=2

// 잔돈
// let change = 1260;
// let change = 5000;
// let change = 3420;

// 내 풀이
// function solution(changeValue) {
//   let count = 0;

//   while (changeValue > 0) {
//     if (changeValue >= 500) {
//       changeValue -= 500;
//       count++;
//       console.log("test500");
//       continue;
//     }
//     if (changeValue >= 100) {
//       changeValue -= 100;
//       count++;
//       console.log("test100");
//       continue;
//     }
//     if (changeValue >= 50) {
//       changeValue -= 50;
//       count++;
//       console.log("test50");
//       continue;
//     }
//     if (changeValue >= 10) {
//       changeValue -= 10;
//       count++;
//       console.log("test10");
//       continue;
//     }
//   }
//   return count;
// }

// console.log(solution(change));

//
//
//
// 강의에서 나온 내용

function solution(changeValue) {
  let arr = [500, 100, 50, 10];
  let count = 0;
  let coin;
  for (coin of arr) {
    count += Math.floor(changeValue / coin);
    changeValue = changeValue % coin;
  }
  return count;
}

console.log(solution(change));
