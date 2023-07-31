// 귤 고르기
function solution(k, tangerine) {
  let answer = 0;
  let list = [];
  tangerine.forEach((tan) => {
    if (list[tan] === undefined) {
      list[tan] = 1;
    } else {
      list[tan]++;
    }
  });

  list.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    count += list[i];
    if (count >= k) {
      answer++;
      break;
    } else {
      answer++;
    }
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
