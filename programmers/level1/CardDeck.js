// 카드 뭉치
function solution(cards1, cards2, goal) {
  let answer = "Yes";

  for (const s of goal) {
    if (cards1[0] === s) {
      cards1.shift();
    } else if (cards2[0] === s) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return answer;
}

solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
); // "Yes"

solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
); // "No"
