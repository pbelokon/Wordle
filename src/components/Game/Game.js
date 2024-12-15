import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Search from '../Search/Search';
import Guesses from '../Guesses/Guesses';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
let score = 0;
function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("");
  function handleAddGuess (guess) {
    setGuesses([...guesses, guess]);
      
      if( guess === answer )setStatus("win");
    handleGameSate()
  }

  function handleGameSate() { 
    score += 1; 

    if (score === 6) setStatus("loss")
  }


 
  return <>
    {status  === "win" ? 
    <div class="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong>{score} guesses</strong>.
  </p>
</div> : undefined

}

{
  status === "loss" ?
  <div class="sad banner">
    <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
  </div> : undefined
}
    <Guesses guesses={guesses} answer={answer}/>
    <Search handleAddGuess={handleAddGuess}/>
  </>;
}

export default Game;
