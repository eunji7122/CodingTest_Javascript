// 영어 끝말잇기
function solution(n, words) {
  let personNumber = 0;
  let turnCount = 0;
  let preWord = "";
  let wordArr = [];
  for (let i = 0; i < words.length; i++) {
    if (i % n === 0) {
      turnCount++;
      personNumber = 1;
    }
    if (wordArr.indexOf(words[i]) !== -1) {
      // 중복 체크
      return [personNumber, turnCount];
    }

    let currentWord = words[i][0];
    if (preWord !== "" && currentWord !== preWord) {
      // 끝말잇기 체크
      return [personNumber, turnCount];
    }
    preWord = words[i][words[i].length - 1];

    wordArr.push(words[i]);
    personNumber++;
  }

  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); // [3, 3]
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
); // [0, 0]
