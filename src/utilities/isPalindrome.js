export function isPalindrome(text) {
  const cleanText = removeNonAlphabeticChars(text).toLowerCase();
  for (let i = 0; i < Math.floor(cleanText.length / 2); i++) {
    if (cleanText[i] !== cleanText[cleanText.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function removeNonAlphabeticChars(text) {
  let cleanText = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      cleanText += text[i];
    }
  }
  return cleanText;
}
