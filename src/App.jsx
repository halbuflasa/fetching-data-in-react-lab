import React, { useState, useEffect } from 'react';
import * as starshipService from './services/starshipService';
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await starshipService.getStarships();
      setStarships(data);
      setFilteredStarships(data);
    };

    fetchStarships();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </main>
  );
};

export default App;
