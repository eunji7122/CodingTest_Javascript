// 점프와 순간 이동
function solution(n) {
  let ans = 0;

  while (n >= 1) {
    if (n % 2 === 1) {
      ans++;
    }
    n = parseInt(n / 2);
  }

  return ans;
}

console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000)); // 5
