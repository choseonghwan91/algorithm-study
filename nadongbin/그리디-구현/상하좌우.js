// 지도 크기 n과 현재위치 x, y 와 이동방향 ("R","R","R","U","D","D")이 주어짐
let n = 5;
let x = 1;
let y = 1;
const plans = ["L", "U", "R", "R", "R", "D", "D", "D"];

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const moveTypes = ["L", "R", "U", "D"];

function solution() {
  for (const plan of plans) {
    let nx = x + dx[moveTypes.indexOf(plan)];
    let ny = y + dy[moveTypes.indexOf(plan)];

    if (nx < 0 || ny < 0 || nx > n || ny > n) {
      continue;
    }

    x = nx;
    y = ny;
  }
  return `x: ${x}, y: ${y}`;
}

solution();
