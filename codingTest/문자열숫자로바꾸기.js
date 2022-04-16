// 문자가 주어지면 숫자로 변환 해야 됩니다.
// 변환 하다만 문자가 주어집니다
// ex => "one4seveneight"
// 문자는 숫자로 변경하고, 숫자는 그대로 반환해 최종 문자열을 숫자로 반환해야 됩니다.
// ex => "one4seveneight" => "1478" => 1478

function convertNum(str) {
  let strValue = str;
  for (let i = 0; i < str.length; i++) {
    if (typeof strValue[i] === "undefined") return Number(strValue);
    if (!Number(strValue[i])) {
      strValue = findNumChar(strValue, i);
    }
  }
  return Number(strValue);
}

convertNum("one4seveneight");
convertNum("23four5six7");
convertNum("2three45sixseven");
convertNum("123");

//

function findNumChar(str, idx) {
  if (str.substring(idx, idx + 3) === "one") {
    return str.replace("one", "1");
  } else if (str.substring(idx, idx + 3) === "two") {
    return str.replace("two", "2");
  } else if (str.substring(idx, idx + 5) === "three") {
    return str.replace("three", "3");
  } else if (str.substring(idx, idx + 4) === "four") {
    return str.replace("four", "4");
  } else if (str.substring(idx, idx + 4) === "five") {
    return str.replace("five", "5");
  } else if (str.substring(idx, idx + 3) === "six") {
    return str.replace("six", "6");
  } else if (str.substring(idx, idx + 5) === "seven") {
    return str.replace("seven", "7");
  } else if (str.substring(idx, idx + 5) === "eight") {
    return str.replace("eight", "8");
  } else if (str.substring(idx, idx + 4) === "nine") {
    return str.replace("nine", "9");
  } else if (str.substring(idx, idx + 4) === "zero") {
    return str.replace("zero", "0");
  }
}
