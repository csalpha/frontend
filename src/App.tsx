import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import ClearButton from './components/ClearButton';
import { PIXABAY_API_KEY } from './config';

interface Image {
  id: number;
  previewURL: string;
  tags: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState<Image[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = () => {
    setBackgroundColor(backgroundColor === 'white' ? 'black' : 'white');
  };

  const clearSearch = () => {
    setSearchTerm('');
    setImages([]);
  };

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
          searchTerm
        )}`
      )
        .then((response) => response.json())
        .then((data) => setImages(data.hits));
    }
  }, [searchTerm]);

  return (
    <div style={{ backgroundColor }}>
      <Header
        onSearch={setSearchTerm}
      />
      
      <div style={{ paddingTop: '1.2rem' }}>
      
        {images.length > 0 ? (
          <div>
            <Body images={images} />
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p>No images found.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
