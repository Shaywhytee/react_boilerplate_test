import React, { useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeBrandsSvgIcons from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../../components/ContactForm/contactForm';
import ContactTitleBg from '../../images/project_yi.jpg';
import { ContentContext } from '../../utils/content';
import { css } from 'styled-components';

function ContactTitle() {
  const contentData = useContext(ContentContext);
  const contactTitle = contentData.find(item => item.name === 'contactTitle');
  const discordButton = contentData.find(item => item.name === 'discordButton');

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = option => {
    setSelectedOption(option);
    if (option === 'discord') {
      window.open(discordButton.link, '_blank');
    }
  };

  if (
    !contactTitle ||
    !discordButton
  ) {
    return null;
  }

  return (
    <div className="title_container">
      <img
        src={ContactTitleBg}
        alt="background"
        className="contact_title_bg"
      />
      <h1>{contactTitle.title}</h1>
      <div className="form_wrapper">
        <div className="form_selection">
          <button
            onClick={() => handleOptionClick('discord')}
            className={selectedOption === 'discord' ? 'active' : ''}
          >
            <FontAwesomeIcon icon={freeBrandsSvgIcons.faDiscord} size="2x" />
            <p>{discordButton.title}</p>
          </button>
          <button
            onClick={() => handleOptionClick('email')}
            className={selectedOption === 'email' ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <p>Send Email</p>
          </button>
        </div>
        {selectedOption === 'email' && <ContactForm />}
      </div>
    </div>
  )
}

export const ContactTitleStyles = css`
 .title_container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 60vh;
  width: 100%;
  color: #C0BEC6;
  position: relative;
  overflow: hidden;
}

 .title_container .contact_title_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  opacity: 0.4;
}

 .title_container h1 {
  font-size: 5rem;
  background-color: rgba($color: black, $alpha: 0.3);
  height: 100%;
  width: 100%;
  line-height: 30vh;
  z-index: 1;
}

 .title_container p {
  font-size: 2rem;
  background-color: rgba($color: black, $alpha: 0.3);
  height: 100%;
  width: 100%;
  z-index: 1;
}

 .form_wrapper {
  display: flex;
  justify-content: space-around;
  align-content: center;
  z-index: 1;

  background-color: #474A5A;
  height: 10vh;
  width: 20vw;
  color: #C0BEC6;
  transition: 0.5s ease-in-out;
}

 .form_wrapper .form_selection {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  width: 15vw;
  opacity: 0.5;
}
 .form_wrapper .form_selection p {
  font-size: 1rem;
}

 .form_wrapper .form_selection button {
  height: 5vh;
  width: 7vw;
  background: none;
  border: none;
  color: #C0BEC6;
  transition: 0.5s ease-in-out;
}

 .form_wrapper .form_selection:hover {
  opacity: 1;
}

 .form_wrapper .form_selection button:hover {
  color: white;
}
@media only screen and (max-width: 750px) {

  .title_container {
    padding-top: 7vh;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }

  .title_container h1 {
    line-height: 10vh;
  }

  .form_wrapper {
    justify-content: space-around;
    width: 100vw;
    height: 13vh;
  }

  .form_wrapper .form_selection {
    width: 100vw;
    height: 20vh;
  }

  .form_wrapper .form_selection button{
    width: 20vw;
    height: 15vh;
  }
}
`

export default ContactTitle;