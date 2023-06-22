// 짝지어 제거하기
function solution(s) {
  let strArr = s.split("");
  let index = 0;
  while (index < strArr.length) {
    if (strArr[index] === strArr[index + 1]) {
      strArr.splice(index, 2);
      index = 0;
    } else {
      index++;
    }
  }

  return strArr.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
