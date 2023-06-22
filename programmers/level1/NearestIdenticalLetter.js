// 가장 가까운 같은 글자
function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    let number = 0;
    answer[i] = -1;
    for (let j = i - 1; j >= 0; j--) {
      number++;
      if (s[j] === s[i]) {
        answer[i] = number;
        break;
      }
    }
  }

  return answer;
}

solution("foobar"); //[-1, -1, 1, -1, -1, -1]
solution("banana"); //[-1, -1, -1, 2, 2, 2]
