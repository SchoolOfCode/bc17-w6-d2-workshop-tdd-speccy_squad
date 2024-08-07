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
