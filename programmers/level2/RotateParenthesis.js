// 괄호 회전하기
function solution(s) {
  let answer = 0;

  let sList = s.split("");
  const correctSet = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  for (let i = 0; i < sList.length; i++) {
    let stack = [];
    let isCorrectString = true;
    for (let j = 0; j < sList.length; j++) {
      if (sList[j] === "(" || sList[j] === "[" || sList[j] === "{") {
        stack.push(sList[j]);
      } else {
        if (correctSet[sList[j]] === stack[stack.length - 1]) {
          stack.pop();
        } else {
          isCorrectString = false;
        }
      }
    }

    if (isCorrectString && stack.length === 0) answer++;

    sList.push(sList[0]);
    sList.shift();
  }

  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("{(["));
