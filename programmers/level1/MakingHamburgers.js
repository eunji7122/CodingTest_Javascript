// 햄버거 만들기
function solution(ingredient) {
    let answer = 0;

    let index = 0;
    let process = true;
    while (process) {
        if (
            ingredient[index] === 1 &&
            ingredient[index + 1] === 2 &&
            ingredient[index + 2] === 3 &&
            ingredient[index + 3] === 1
        ) {
            ingredient.splice(index, 4);
            index = index - 3;
            answer++;
        } else if (index > ingredient.length - 3) {
            process = false;
        } else {
            index++;
        }
    }

    return answer;
}

//console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
//console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
console.log(solution([1, 2, 2, 1, 3, 1, 2, 3, 1, 3, 1])); // 2
// 빵: 1
// 야채: 2
// 고기: 3
// 빵 – 야채 – 고기 - 빵 = 1 - 2 - 3 - 1