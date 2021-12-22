// 엘리베이터 함수를 완료하시오
// 엘리베이터는 3개의 인자를 받습니다.
// left, right, call

// 두개의 엘리베이터와 사용자가 엘리베이터 버튼을 누르는 층의 값입니다.
// 층은 3층으로 구성되어 있고,
// 가까운 엘리베이터를 리턴하면 됩니다.
// 똑같은 차이가 날때는 right를 리턴하면 됩니다.

// ex)
// elevator(1,2,2) // right
// elevator(1,3,2) // right
// elevator(3,2,3) // left
// elevator(1,2,1) // left
// elevator(0,0,0) // right

function elevator(left, right, call) {
  let leftcon = Math.abs(call - left);
  let rightcon = Math.abs(call - right);

  if (leftcon < rightcon) {
    return "left";
  } else {
    return "right";
  }
}

elevator(1, 3, 1);
