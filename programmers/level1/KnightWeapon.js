// 기사단원의 무기
function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let divisorCount = getDivisorCount(i);
    if (divisorCount <= limit) answer += divisorCount;
    else answer += power;
  }

  return answer;
}

function getDivisorCount(num) {
  let divisorCount = 0;
  let range = Math.sqrt(num);
  for (let j = 1; j <= range; j++) {
    if (num % j === 0) divisorCount += 2;
  }

  if (num % range === 0) divisorCount--;

  return divisorCount;
}

solution(5, 3, 2); // 10
solution(10, 3, 2); // 21
