import React from 'react';

interface ClearButtonProps {
  clearSearch: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ clearSearch }) => {
  return <button onClick={clearSearch}>Clear Search</button>;
};

export default ClearButton;
