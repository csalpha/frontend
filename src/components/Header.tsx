import React from 'react';
import Search from './Search';
import Logo from './Logo';
import './Header.css';

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

function Header({ onSearch }: HeaderProps) {
  return (
    <header  className="header">
      <div>
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;
