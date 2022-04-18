// 시각에서 00:00:00 ~ 23:59:59 동안 3이 하나라도 들어가는 경우가 몇가지 있는지 출력하시오

function solution() {
  let result = 0;
  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        const str = `${i}${j}${k}`;
        if (str.includes("3")) {
          result++;
        }
      }
    }
  }
  return result;
}

console.log(solution());
