// 예상 대진표
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    answer++;

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }

  return answer;
}

console.log(solution(8, 4, 7)); // 3
