import React from 'react';
import { range } from '../../utils';
import {checkGuess} from "../../game-helpers.js"

function Guess({word, answer}) {
  if (word) { 
    word = checkGuess(word, answer)
  }
  return (
    <p className="guess">
      {range(5).map(num => (
        <span key={crypto.randomUUID()} className={`cell ${ word ? word[num].status : ""}`}>{word ? word[num].letter : undefined}</span>
      ))}
    </p>
    )
  ;
}

export default Guess;
