// 의상

function solution(clothes) {
  var answer = 1;

  let clothMap = new Map();

  clothes.forEach((item) => {
    if (!clothMap.has(item[1])) {
      let arr = [];
      arr.push(item[0]);
      clothMap.set(item[1], arr);
    } else {
      const arr = clothMap.get(item[1]);
      arr.push(item[0]);
      clothMap.set(item[1], arr);
    }
  });

  // (1번 종류의 수 + 1)(2번 종류의 수 + 2)...(n번 종류의 수 + 1) - 1
  clothMap.forEach((item) => {
    answer *= item.length + 1;
  });

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5
// 1. yellow_hat
// 2. blue_sunglasses
// 3. green_turban
// 4. yellow_hat + blue_sunglasses
// 5. green_turban + blue_sunglasses

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
// 1. crow_mask
// 2. blue_sunglasses
// 3. smoky_makeup
