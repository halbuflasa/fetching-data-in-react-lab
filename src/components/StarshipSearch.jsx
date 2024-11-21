import React, { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchTerm">Search Term:</label>
      <input
        type="text"
        id="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a starship..."
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default StarshipSearch;
