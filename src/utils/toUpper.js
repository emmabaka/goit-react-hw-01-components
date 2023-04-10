export function firstLetterToUpperCase(word) {
  const letter = word.split('');
  const upper = letter[0].toUpperCase();
  letter.splice(0, 1, upper);
  return letter;
}
