/**
 * https://leetcode.com/problems/roman-to-integer/
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;
  for (const [k, v] of Object.entries(map)) {
    let mul = countWords(k, s);
    if (mul) {
      res += mul * v;
      s = s.split(k).join('');
    }
  }

  return res;
};

const countWords = (word, str) => {
  let count = 0;
  let position = str.indexOf(word);

  while (position !== -1) {
    count++;
    position = str.indexOf(word, position + 1);
  }

  return count;
}
