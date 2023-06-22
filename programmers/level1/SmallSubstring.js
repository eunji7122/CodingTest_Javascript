// 크기가 작은 부분문자열
function solution(t, p) {
  let answer = 0;
  const array = t.toString().split("");

  const subStringLength = p.toString().length;
  for (let i = 0; i <= array.length - subStringLength; i++) {
    let subString = "";
    for (let j = 0; j < subStringLength; j++) {
      subString += array[i + j];
    }
    if (Number(subString) <= p) {
      answer++;
    }
  }

  return answer;
}

function solution2(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.toString().length - p.toString().length; i++) {
    if (t.toString().slice(i, i + p.toString().length) <= p) answer++;
  }
  return answer;
}

console.log(solution2(10203, 15));
