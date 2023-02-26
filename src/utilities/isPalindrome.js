export function isPalindrome(text) {
  const palindrome = text
    .replace(/[^a-zA-Z]/g, '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
  return text.replace(/[^a-zA-z]/g, '').toLowerCase() === palindrome;
}
