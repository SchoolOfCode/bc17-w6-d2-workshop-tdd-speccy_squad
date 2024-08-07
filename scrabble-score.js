<<<<<<< HEAD
export function calculateScrabbleScore(word) {
  const lettersArray = [
    ["A", 1],
    ["B", 3],
    ["C", 3],
    ["D", 2],
    ["E", 1],
    ["F", 4],
    ["G", 2],
    ["H", 4],
  ];

  let score = 0;
  for (const letter of word.toUpperCase()) {
    const letterScore =
      lettersArray.find(([char]) => char === letter)?.[1] || 0;
    score += letterScore;
  }
  return score;
}
=======
const letters = { 
A : 1,
B : 3, 
C : 3,
D : 2,
E : 1,
F : 4,
G : 2,
H : 4,
}
// | I      | 1     |
// | J      | 8     |
// | K      | 5     |
// | L      | 1     |
// | M      | 3     |
// | N      | 1     |
// | O      | 1     |
// | P      | 3     |
// | Q      | 10    |
// | R      | 1     |
// | S      | 1     |
// | T      | 1     |
// | U      | 1     |
// | V      | 4     |
// | W      | 4     |
// | X      | 8     |
// | Y      | 4     |
// | Z      | 10 
export function calculateScrabbleScore(word) {  
  return word .toLowerCase() .split('') 
  .reduce((total, letter) => total + (letters[letter] || 0), 0);  } 

// ABBA - word.split(); ["A", "B", "B", "A"];
// .reduce((total, char) => total + (letters[char] || 0), 0);
>>>>>>> 84db762076e2165134e840da6448df3b530e25d0

// 2. Now add the simplest code you can to the `calculateScrabbleScore` function. Make it return the right score for the word "A" to pass the failing test.
//    - Once you've updated the implementation, run the tests again.
//    - This time the test should pass (if your implementation is correct).
//    - This is the "green" stage in the TDD cycle (red -> green -> refactor)

// 3. Look over the code. Make changes to simplify or improve it if you can. When you're done with changes, run the tests again. This checks that your changes didn't break anything.
<<<<<<< HEAD
=======


 // Example usage and test cases
 //const words = ["hello", "world", "Scrabble", "QUICK", "crazy", ""]; 
 //words.forEach(word => { console.log(`The Scrabble score for "${word}" is: ${calculateScrabbleScore(word)}`); });
>>>>>>> 84db762076e2165134e840da6448df3b530e25d0
