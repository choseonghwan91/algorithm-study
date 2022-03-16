// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(num) {
  let avg = 0;
  for (let i = 0; i < num.length; i++) {
    avg += num[i];
  }
  return Math.floor(avg / num.length);
}

getAverage([1, 2, 2, 2]);

// 계산 메소드 안쓰고 풀어본 답
// function getAverage(marks){
//   //TODO : calculate the downward rounded average of the marks array
//     let avg = 0
//   for(let i = 0; i < marks.length; i++) {
//     avg += marks[i]
//   }
//   let result = (avg/marks.length).toString().split('.')
//   return parseInt(result[0])
// }

// Clever Answer
// function getAverage(marks) {
//   return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
// }
