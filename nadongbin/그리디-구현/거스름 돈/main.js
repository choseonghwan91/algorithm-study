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
