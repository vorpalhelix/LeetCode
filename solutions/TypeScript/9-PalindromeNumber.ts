function isPalindrome(x: number): boolean {
  let reverse = 0
  if (x < 0 || (x > 0 && x % 10 === 0)) {
    return false
  }

  if (x === 0) {
    return true
  }

  while (x > reverse) {
    reverse = reverse * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  let palindrome = x === reverse || x === Math.floor(reverse / 10)
  return palindrome
}
