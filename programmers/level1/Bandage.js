// [PCCP 기출문제] 1번 / 붕대감기

function solution(bandage, health, attacks) {
  var lastAttackTime = attacks[attacks.length - 1][0];
  var maxHealth = health;

  let attackIndex = 0;
  let successCount = 0;
  for (let i = 1; i <= lastAttackTime; i++) {
    if (i === attacks[attackIndex][0]) {
      health -= attacks[attackIndex][1];

      if (health <= 0) {
        break;
      }

      successCount = 0;
      attackIndex++;
      continue;
    }

    successCount++;
    if (successCount === bandage[0]) {
      health += bandage[1];
      health += bandage[2];
      successCount = 0;
    } else {
      health += bandage[1];
    }

    if (health > maxHealth) {
      health = maxHealth;
    }
  }

  return health <= 0 ? -1 : health;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);
