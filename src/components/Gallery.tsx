import React from 'react';
import './Gallery.css';

interface Image {
  id: number;
  previewURL: string;
  tags: string;
}

interface GalleryProps {
  images: Image[];
}

function Gallery({ images }: GalleryProps) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <img key={image.id} src={image.previewURL} alt={image.tags} />
      ))}
    </div>
  );
}

export default Gallery;