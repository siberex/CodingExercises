// Converts string to UTF16-encoded representation (useful for emoji parsing)
let toUtf = str => (
  typeof str === 'string'
    && str.length > 0
    && str.split('').map(
      char => '\\u' + (
        // Zero-pad up to 16 bits (0xFFFF)
        '0000' + char.charCodeAt(0).toString(16)
      ).slice(-4).toUpperCase()
    ).join('')
);

// Explained:
let toUtfDebug = str => {
  if (typeof str !== 'string' || str.length <= 0) return false;
  let result = '',
      resultMap = {};
  for (let i = 0; i < str.length; i++) {
    let charCode  = str.charCodeAt(i),
        hexCode   = charCode.toString(16);
    // Zero-pad up to 16 bits (0xFFFF)
    let hexCodePadded     = ('0000' + hexCode).slice(-4),
        hexCodeUppercased = hexCodePadded.toUpperCase();
    result += resultMap[charCode] = '\\u' + hexCodeUppercased;
  }
  return resultMap['$'] = result, resultMap;
};

// Test cases:
let testMap = {
  "©" : "\\u00A9",
  "sib.li": "\\u0073\\u0069\\u0062\\u002E\\u006C\\u0069",
  "0⃣0⃣7⃣" : "\\u0030\\u20E3\\u0030\\u20E3\\u0037\\u20E3",
  "😀" : "\\uD83D\\uDE00",
  "😸" : "\\uD83D\\uDE38",
  "🐼" : "\\uD83D\\uDC3C",
  "🇷🇺" : "\\uD83C\\uDDF7\\uD83C\\uDDFA",
  "👩" : "\\uD83D\\uDC69",
  "👨" : "\\uD83D\\uDC68",
  "👧" : "\\uD83D\\uDC67",
  "👦" : "\\uD83D\\uDC66",
  "👨‍👩‍👧‍👦" : "\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66",
  "👨‍👨‍👧‍👧" : "\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67"
};

// Launch tests
for (let k in testMap) {
  if (toUtf(k) !== testMap[k]) {
    console.error(k, testMap[k]);
  }
  if (JSON.parse('"' + testMap[k] + '"') !== k) {
    console.error(testMap[k], k);
  }  
}

