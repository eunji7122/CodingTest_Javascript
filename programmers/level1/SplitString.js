// 문자열 나누기
function solution(s) {
  let answer = 0;

  const strArr = s.split("");

  let sameCount = 0;
  let otherCount = 0;
  let currentAlpha = strArr[0];

  for (let i = 0; i < strArr.length - 1; i++) {
    if (currentAlpha === strArr[i]) {
      sameCount++;
    } else {
      otherCount++;
    }

    if (sameCount === otherCount) {
      currentAlpha = strArr[i + 1];
      answer++;
    }
  }

  return answer + 1;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
