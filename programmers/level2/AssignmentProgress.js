// 과제 진행하기 (연습 필요)
function solution(plans) {
  const newPlans = plans.map(([name, start, play]) => {
    const [hour, minute] = start.split(":").map((str) => Number(str));
    const time = hour * 60 + minute;
    const studyTime = Number(play);
    return { name, start: time, studyTime: studyTime };
  });

  newPlans.sort((a, b) => a.start - b.start);

  let index = 0;
  const processingStack = [];
  const finishList = [];

  for (let i = 0; i < 1440; i++) {
    if (processingStack.length !== 0) {
      const lastPlan = processingStack[processingStack.length - 1];
      lastPlan.studyTime--;

      if (lastPlan.studyTime === 0) {
        processingStack.pop();
        finishList.push(lastPlan.name);
      }
    }

    if (i === newPlans[index]?.start) {
      processingStack.push(newPlans[index]);
      index++;
    }
  }

  const unfinishedList = processingStack.reverse().map(({ name }) => name);
  return [...finishList, ...unfinishedList];
}

console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ])
); // ["korean", "english", "math"]
