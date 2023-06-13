// 추억 점수
function solution(name, yearning, photo) {
  let answer = [];

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      const index = name.findIndex((item) => item === photo[i][j]);
      if (index !== -1) sum += yearning[index];
    }
    answer.push(sum);
  }
  return answer;
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
); //[19, 15, 6]
