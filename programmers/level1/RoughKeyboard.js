// 대충 만든 자판
function solution(keymap, targets) {
  let answer = [];

  for (let i = 0; i < targets.length; i++) {
    let sum = 0;
    for (let k = 0; k < targets[i].length; k++) {
      let index = 1000;
      for (let j = 0; j < keymap.length; j++) {
        const findIndex = keymap[j].indexOf(targets[i][k]);
        if (index > findIndex && findIndex !== -1) {
          index = findIndex;
        }
      }
      sum += index + 1;
    }
    if (sum >= 1000) sum = -1;
    answer.push(sum);
  }

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]
console.log(solution(["BC"], ["AC", "BC"])); // [-1, 3]
