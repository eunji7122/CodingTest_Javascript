// 멀리 뛰기
function solution(n) {
  let list = [];
  list[0] = 0;
  list[1] = 1;
  list[2] = 2;

  for (let i = 3; i <= n; i++) {
    list[i] = (list[i - 2] + list[i - 1]) % 1234567;
  }

  return list[n];
}

console.log(solution(1)); // 5
console.log(solution(2)); // 3
