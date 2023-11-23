// k진수에서 소수 개수 구하기

function solution(n, k) {
  var answer = 0;

  var decimalArr = n.toString(k).split("0");

  decimalArr.forEach((item) => {
    if (isPrimeNumber(Number(item))) {
      answer++;
    }
  });

  return answer;
}

function isPrimeNumber(number) {
  var result = true;
  if (number === 0 || number === 1) {
    result = false;
  }

  if (number === 2) {
    result = true;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      result = false;
    }
  }

  return result;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
