import React, { useState } from "react";

function Search({searchResults}) {
  const [query, setQuery] = useState("")


  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchResults(query)
    console.log("submitted");
    setQuery("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
