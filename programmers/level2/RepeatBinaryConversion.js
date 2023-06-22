// 이진 변환 반복하기
function solution(s) {
    let count = 0;
    let zeroCount = 0;

    while (s !== "1") {
        zeroCount += s.replaceAll("1", "").length;
        s = s.replaceAll("0", "").length;
        let convertStr = "";
        while (s > 0) {
            convertStr = (s % 2) + convertStr;
            s = parseInt(s / 2);
        }
        s = convertStr;
        count++;
    }

    return [count, zeroCount];
}

console.log(solution("110010101001")); // [3, 8]
console.log(solution("01110")); // [3, 3]
console.log(solution("1111111")); // [4, 1]