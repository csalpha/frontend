import React from 'react';

interface ColorButtonProps {
  changeBackgroundColor: () => void;
  isDarkMode: boolean;
}

const ColorButton: React.FC<ColorButtonProps> = ({
  changeBackgroundColor,
  isDarkMode,
}) => {
  return (
    <button onClick={changeBackgroundColor}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ColorButton;
