// 입력되는 단어들을 확인해서 반복되는 알파벳이 있는지 확인한다
// 반복 되는 알파벳이 있는 단어 중, 반복되는 단어가 많은 단어를 리턴해야 된다.
// 그 단어 뒤에 ": abcde" 를 붙이고 뒤집어서 리턴한다.
// ex) apple hi => apple: abcde => edcba :elppa
// 반복되는 단어의 갯수가 같다면 앞에 단어를 리턴
// ex) hello apple pie => hello: abcde => edcba :olleh

const test = "Hello apple pie";

function testfunc(str) {
  let result = "";
  let foundWord = [];
  let arr = str.split(" ");
  for (const word of arr) {
    foundWord = [...foundWord, findWord(word)];
  }
  if (Math.max(...foundWord) < 1) {
    result = `-1: abcde`;
  } else {
    result = `${arr[foundWord.indexOf(Math.max(...foundWord))]}: abcde`;
  }

  return result.split("").reverse().join("");
}

function findWord(word) {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    const count = word
      .split("")
      .sort()
      .filter((el) => word[i] === el).length;
    if (count > 1) {
      if (result < count) {
        result = count;
      }
    }
  }
  return result;
}

testfunc(test);
