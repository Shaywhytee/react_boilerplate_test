import React, { useEffect, useState } from 'react';

function BucketComponent() {
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const photoNames = [
        'client_logo_1.jpg',
        'client_logo_2.jpg',
        'client_logo_3.jpg',
        'contact_bg.jpg',
        'facicon.ico',
        'homepage_intro.jpg',
        'icon-512x512.png',
        'logo.png',
        'photo_box_1.jpg',
        'photo_box_2.jpg'
      ];

      const urls = [];

      for (const photoName of photoNames) {
        const response = await fetch(`https://storage.googleapis.com/honest_editz_photos/${photoName}`);

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          urls.push(url);
        } else {
          console.error(`Failed to fetch photo: ${photoName}`);
        }
      }

      setPhotoUrls(urls);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div>
      {photoUrls.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default BucketComponent;
