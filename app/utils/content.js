import React, { createContext, useEffect, useState } from 'react';

export const ContentContext = createContext(null);
export const ContentProvider = ({ children }) => {
  const [contentData, setContentData] = useState([]);
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    fetchContentData();
    fetchPhotos();
  }, []);

  const fetchContentData = async () => {
    try {
      const response = await fetch('https://honesteditz-back.herokuapp.com/get/content');
      const data = await response.json();
      setContentData(data);
    } catch (error) {
      console.error('Error fetching content data:', error);
    }
  };

  const fetchPhotos = async () => {
    try {
      const photoNames = [
        'client_logo_1.jpg',
        'client_logo_2.jpg',
        'client_logo_3.jpg',
        'contact_bg.jpg',
        'favicon.ico',
        'homepage_intro.jpg',
        'icon-512x512.png',
        'logo.png',
        'photo_box_1.jpg',
        'photo_box_2.jpg',
        'photo_box_3.jpg'
      ];

      const urls = [];

      for (const photoName of photoNames) {
        const response = await fetch(`https://storage.googleapis.com/honest_editz_images/${photoName}`);

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
    <ContentContext.Provider value={{ contentData, photoUrls }}>
      {children}
    </ContentContext.Provider>
  );
};
