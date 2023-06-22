// 과일 장수
function solution(k, m, score) {
  let answer = 0;
  let ary = [];
  score.sort((a, b) => b - a);
  let count = -1;

  for (let i = 0; i < score.length; i++) {
    if (i % m === 0) {
      count++;
      ary[count] = [];
    }

    ary[count].push(score[i]);
  }

  for (let i = 0; i < ary.length; i++) {
    if (ary[i].length !== m) break;
    answer += Math.min(...ary[i]) * m;
  }

  return answer;
}

console.log();
solution(3, 4, [1, 2, 3, 1, 2, 3, 1]); // 8
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]); // 33
