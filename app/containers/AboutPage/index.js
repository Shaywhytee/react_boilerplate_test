/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import React from 'react';
import CardDeck from '../../components/cards/cards';
import AboutSquares from './aboutSquares';


function About() {


  return (
    <div className="about_container">
      <AboutSquares />
      <CardDeck />
    </div>
  );
}

export default About;
