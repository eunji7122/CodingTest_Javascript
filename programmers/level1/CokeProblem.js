// 콜라 문제
function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    let remainder = n % a;
    n = Math.floor(n / a);
    answer += n * b;
    n = n * b + remainder;
  }

  return answer;
}
console.log(solution(3, 1, 20));
console.log(solution(5, 3, 21));
