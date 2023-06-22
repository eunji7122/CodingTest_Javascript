// 덧칠하기
function solution(n, m, section) {
  let answer = 0;
  let paintedSection = 0;

  section.forEach((s) => {
    if (s > paintedSection) {
      paintedSection = s + m - 1;
      answer++;
    }
  });

  return answer;
}

solution(8, 4, [2, 3, 6]); // 2
solution(5, 4, [1, 3]); // 1
solution(100, 1, [2, 3, 99]); // 3
