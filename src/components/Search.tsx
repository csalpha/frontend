import React, { useState } from 'react';
import './Search.css';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <input
      data-testid="input"
      className="search-input"
      type="text"
      placeholder='Search...'
      onChange={(event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
      }}
    />
  );
}

export default Search;
