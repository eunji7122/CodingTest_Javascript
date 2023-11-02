// 개인정보 수집 유효기간

function solution(today, terms, privacies) {
  var answer = [];

  for (let i = 0; i < privacies.length; i++) {
    const splitItem = privacies[i].split(" ");
    const findGrade = terms
      .find((item) => item.includes(splitItem[1]))
      .split(" ");

    const todayToDateTime = today.split(".");
    const dateToCompare = splitItem[0].split(".");

    const monthGap =
      (today.split(".")[0] - splitItem[0].split(".")[0]) * 12 +
      (today.split(".")[1] - splitItem[0].split(".")[1]);
    const dateGap = todayToDateTime[2] - dateToCompare[2];

    const totalGap = monthGap * 28 + dateGap;
    if (totalGap >= findGrade[1] * 28) {
      answer.push(i + 1);
    }
  }

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); // [1, 3]

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); // [1, 4, 5]
