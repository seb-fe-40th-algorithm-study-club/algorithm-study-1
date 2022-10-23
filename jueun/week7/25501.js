const input = ["5", "AAA", "ABBA", "ABABA", "ABCA", "PALINDROME"];
let count = 1;

function recursion(s, l, r) {
  if (l >= r) return 1;
  else if (s[l] != s[r]) return 0;
  else {
    count++;
    return recursion(s, l + 1, r - 1);
  }
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}

for (let i = 1; i <= +input[0]; i++) {
  count = 1;
  console.log(isPalindrome(input[i]), count);
}
