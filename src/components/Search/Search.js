import React from 'react';

function Search({handleAddGuess}) {
  const [search, setSearch] = React.useState('')
  function handleSubmit(event) { 
    event.preventDefault();

    console.log(search);
    handleAddGuess(search);
    setSearch("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" required pattern='[a-zA-Z]{5}' title='5 letter word'
        value={search}
        onChange={(event) => { 
          setSearch(event.target.value.toUpperCase());
        }}
      />
    </form>
  )
}

export default Search;
