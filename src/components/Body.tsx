import React from 'react';
import Gallery from './Gallery';

interface Image {
  id: number;
  previewURL: string;
  tags: string;
}

interface BodyProps {
  images: Image[];
}

function Body({ images }: BodyProps) {
  return (
    <div data-testid="body">
      <Gallery  images={images} />
    </div>
  );
}

export default Body;
