/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */





import { isString, splitOnWhitespace } from './lib/helpers.js';

// Helper functions for string analysis

/**
 * Finds the longest word in a string.
 * @param {string} str The input string.
 * @returns {string} The longest word.
 */
function longest(str) {
  const words = splitOnWhitespace(str);
  if (words.length === 0) return '';
  return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

/**
 * Finds the shortest word in a string.
 * @param {string} str The input string.
 * @returns {string} The shortest word.
 */
function shortest(str) {
  const words = splitOnWhitespace(str);
  if (words.length === 0) return '';
  return words.reduce((shortest, word) => word.length < shortest.length ? word : shortest, words[0]);
}

/**
 * Counts the vowels in a string.
 * @param {string} str The input string.
 * @returns {number} The count of vowels.
 */
function vowels(str) {
  return (str.match(/[aeiouáéíóúýæö]/gi) || []).length;
}

/**
 * Counts the consonants in a string.
 * @param {string} str The input string.
 * @returns {number} The count of consonants.
 */
function consonants(str) {
  return (str.match(/[bcdfghjklmnpqrstvwxyzðþ]/gi) || []).length;
}

/**
 * Checks if a string is a palindrome.
 * @param {string} str The input string.
 * @returns {boolean} True if the string is a palindrome, otherwise false.
 */
function palindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

/**
 * Reverses a string.
 * @param {string} str The input string.
 * @returns {string} The reversed string.
 */
function reverse(str) {
  return str.split('').reverse().join('');
}

// Function to update the DOM based on the analyzed string
function updateAnalysisOutput(str) {
  const outputDiv = document.querySelector('.output');
  if (!isString(str) || str.trim() === '') {
    outputDiv.classList.add('hidden');
    return;
  }

  // Update DOM with analysis results
  outputDiv.querySelector('.input').textContent = str;
  outputDiv.querySelector('.longest').textContent = longest(str);
  outputDiv.querySelector('.shortest').textContent = shortest(str);
  outputDiv.querySelector('.vowels').textContent = vowels(str);
  outputDiv.querySelector('.consonants').textContent = consonants(str);
  outputDiv.querySelector('.palindrome').textContent = palindrome(str) ? 'samhverfur' : 'ekki samhverfur';
  outputDiv.querySelector('.reversed').textContent = reverse(str);

  outputDiv.classList.remove('hidden');
}

// Event listener for the "Greina" button
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const textareaValue = document.querySelector('#string').value;
  updateAnalysisOutput(textareaValue);
});

// Event listener for the "Hreinsa" button to clear the output
document.querySelector('form').addEventListener('reset', () => {
  const outputDiv = document.querySelector('.output');
  outputDiv.classList.add('hidden');
});
