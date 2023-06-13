// 숫자 짝꿍 (복습 필요)
function solution(X, Y) {
  const xObject = {};
  const yObject = {};
  const mateObject = {};

  X.split("").forEach((x) => {
    if (xObject[x] === undefined) {
      xObject[x] = 1;
    } else xObject[x]++;
  });

  Y.split("").forEach((y) => {
    if (yObject[y] === undefined) {
      yObject[y] = 1;
    } else yObject[y]++;
  });

  Object.entries(xObject).forEach(([key, value]) => {
    if (yObject[key] !== undefined) {
      mateObject[key] = Math.min(value, yObject[key]);
    }
  });

  let concatStr = "";
  Object.entries(mateObject).forEach(([key, value]) => {
    concatStr += key.repeat(value);
  });

  const concatArr = concatStr.split("");
  concatArr.sort((a, b) => b - a);
  if (concatStr.length === 0) return "-1";
  if (concatArr[0] === "0") return "0";
  return String(concatArr.join(""));
}

solution("100", "2345"); // -1
solution("100", "203045"); // 0
