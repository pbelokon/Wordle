import React from 'react';

function Guesses({guesses}) {
  return (
    <div className="guess-results">
      {guesses.map((guess => (
        <p className="guess" key={guess.id}>{guess.search}</p>
      )))}
    </div>
  );
}

export default Guesses;
