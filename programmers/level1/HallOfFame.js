// 명예의 전당
function solution(k, score) {
  let answer = [];

  let scoresOfFame = [];

  for (let i = 0; i < score.length; i++) {
    if (scoresOfFame.length < k) {
      scoresOfFame.push(score[i]);
    } else {
      if (
        score[i] > Math.max(...scoresOfFame) ||
        score[i] > Math.min(...scoresOfFame)
      ) {
        scoresOfFame[scoresOfFame.indexOf(Math.min(...scoresOfFame))] =
          score[i];
      }
    }
    answer.push(Math.min(...scoresOfFame));
  }

  return answer;
}

solution(3, [10, 100, 20, 150, 1, 100, 200]); // [10, 10, 10, 20, 20, 100, 100]
solution(9, [10, 30, 40, 3, 0, 20, 4]); // [10, 10, 10, 3, 0, 0, 0]
