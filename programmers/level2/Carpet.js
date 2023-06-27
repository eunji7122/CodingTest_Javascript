// 카펫*
function solution(brown, yellow) {
    const area = brown + yellow;

    for (let width = area - 1; width > 0; width--) {
        if (area % width) continue;

        const height = area / width;
        const y = (width - 2) * (height - 2);
        const b = area - y;

        if (y === yellow && b === brown) {
            return [width, height];
        }
    }

    return [];
}

console.log(solution2(10, 2)); // [4, 3]
console.log(solution2(8, 1)); // [3, 3]
console.log(solution2(24, 24)); // [8, 6]

function solution2(brown, yellow) {
    const area = brown + yellow;
    let divisors = [];
    for (let i = 1; i <= area; i++) {
        if (area % i === 0) {
            divisors.push(i);
        }
    }

    for (const divisor of divisors) {
        const height = divisor;
        const width = area / height;
        const y = (width - 2) * (height - 2);
        const b = area - y;

        if (y === yellow && b === brown) {
            return [width, height];
        }
    }

    return [];
}