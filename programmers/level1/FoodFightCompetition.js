// 푸드 파이트 대회
function solution(food) {
  let answer = "0";
  for (let i = food.length - 1; i >= 0; i--) {
    if (food[i] === 1) continue;

    let half = Math.floor(food[i] / 2);

    for (let j = 0; j < half; j++) {
      answer = answer + i;
      answer = i + answer;
    }
  }
  return answer;
}

solution([1, 7, 1, 2]); //"111303111"

solution([1, 3, 4, 6]); //"1223330333221"
