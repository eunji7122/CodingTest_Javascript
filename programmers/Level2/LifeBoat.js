// 구명보트*
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  while (people.length > 0) {
    let boatWeight = people.pop();
    while (boatWeight <= limit) {
      if (boatWeight + people[people.length - 1] <= limit) {
        boatWeight += people.pop();
      } else if (boatWeight + people[0] <= limit) {
        boatWeight += people.shift();
      } else {
        break;
      }
    }
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
