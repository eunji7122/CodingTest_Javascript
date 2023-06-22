// 짝지어 제거하기
function solution(s) {
  const stack = [];

  for (const item of s) {
    stack.push(item);
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0

// var answer = -1;
// let filtering = true
// const stack = [];
//
// for( let i of s ){
//   stack.push(i)
//   if(stack[stack.length-1] == stack[stack.length-2] ){
//     stack.pop()
//     stack.pop()
//   }
// }
// answer = stack.length == 0 ? 1 : 0;
// return answer;
