// 할인 행사

function solution(want, number, discount) {
  var answer = 0;

  let day = 0;
  while (day + 10 <= discount.length) {
    const discountList = discount.slice(day, day + 10);
    let possible = false;
    for (let i = 0; i < want.length; i++) {
      const count = discountList.filter((item) => item === want[i]).length;

      if (count !== number[i]) {
        possible = false;
        break;
      }
      possible = true;
    }
    if (possible) answer++;
    day++;
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);

console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
