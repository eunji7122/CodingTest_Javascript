// 둘만의 암호
function solution(s, skip, index) {
  const skipArr = skip.split("").map((c) => c.charCodeAt(0));

  const converted = s.split("").map((c) => {
    let convert = c.charCodeAt(0);
    for (let i = 0; i < index; i++) {
      convert++;

      while (skipArr.includes(convert)) {
        convert++;
      }

      if (convert === "z".charCodeAt(0) + 1) {
        convert = "a".charCodeAt(0);
      }

      while (skipArr.includes(convert)) {
        convert++;
      }
    }
    return convert;
  });

  return String.fromCharCode(...converted);
}

//console.log(solution("aukks", "wbqd", 5));
console.log(solution("ybcde", "az", 1)); //bcdef
console.log(solution("z", "abcdefghij", 20)); //n
