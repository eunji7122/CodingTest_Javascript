// 행렬의 곱셈

function solution(arr1, arr2) {
  const answer = [];
  const rowLength = arr1.length;
  const colLength = arr2[0].length;

  for (let i = 0; i < rowLength; i++) {
    let tmpArr = [];
    for (let j = 0; j < colLength; j++) {
      let a = 0;
      let sum = 0;
      while (a < arr1[i].length) {
        sum += arr1[i][a] * arr2[a][j];
        a++;
      }
      tmpArr.push(sum);
    }
    answer.push(tmpArr);
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4],
      [2, 4],
      [3, 1],
    ]
  )
);
