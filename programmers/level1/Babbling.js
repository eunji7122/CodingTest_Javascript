// 옹알이
function solution(babbling) {
  let answer = 0;

  const enableBabbling = ["aya", "ye", "woo", "ma"];

  babbling.forEach((item) => {
    let str = item;
    for (let i = 0; i < enableBabbling.length; i++) {
      str = str.replaceAll(enableBabbling[i], i);

      if (str.includes(i.toString() + i.toString())) {
        break;
      }

      str = str.replaceAll(i, " ");
    }

    if (str.trim() === "") {
      answer++;
    }
  });

  return answer;
}

console.log(solution(["ayayeayayeayaaya"])); // 1
console.log(solution(["ayayeaya", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2
