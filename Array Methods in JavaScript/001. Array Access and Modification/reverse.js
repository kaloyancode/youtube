// const historicalData = [10, 20, 30, 40, 50];

// historicalData.reverse();
// console.log(historicalData);

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
