import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Roboto', sans-serif;
  }


  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  .app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

  }
  .app_bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  p,
  label {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }

  ${'' /* Nav Bar Styles */}
  .nav_bg {
  background: linear-gradient(180deg, rgba(55,55,55,1) 0%, rgba(24,24,24,1) 28%, rgba(0,0,0,1) 100%);
  width: 100vw;
  height: 15vh;
}

.nav_bar_wrapper {
  display: flex;
  width: 70vw;
  height: 15vh;
  justify-content: space-around;
  align-items: center;
  margin-left: 15vw;
  margin-right: 15vw;
}

.icon_wrapper {
  background-size: contain;
  background-repeat: no-repeat;
  width: 10vw;
  height: 10vh;
}

.socials_wrapper {
  display: flex;
  flex-direction: column;
  color: #3aaee1;
  text-align: right;
}

.social {
  margin-right: .5vw;
  margin-bottom: .5vh;
  transition: .5s;
}

.social:hover {
  color: white;
  text-shadow: 3px 3px 3px black;
}

.nav_bar_wrapper .btn_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.nav_bar_wrapper .btn_wrapper .user_btns {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav_bar_wrapper .btn_wrapper .edit_btns {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav_btn {
  width: 10vw;
  height: 5vh;
  background: none;
  border: none;
  color: white;
  transition: .5s;
  font-size: 2rem;
  text-decoration: none;
}

.nav_btn:hover {
  color: #3aaee1;
  text-shadow: 3px 3px 3px black;
  letter-spacing: 1px;
}

.btn_wrapper button {
  width: 10vw;
  height: 5vh;
  background: none;
  border: none;
  color: white;
  transition: .5s;
  font-size: 2rem;
  text-decoration: none;
}

.btn_wrapper button:hover {
  color: #3aaee1;
  text-shadow: 3px 3px 3px black;
  letter-spacing: 1px;
}


${'' /* Footer Stlyes */}

.footer_bg {
  background: linear-gradient(180deg, rgba(55,55,55,1) 0%, rgba(24,24,24,1) 28%, rgba(0,0,0,1) 100%);      
  width: 100vw;
  height: 25vh;
}

.footer_wrapper {
  display: flex;
  width: 70vw;
  height: 25vh;
  justify-content: space-around;
  align-items: center;
  margin-left: 15vw;
  margin-right: 15vw;
}

.icon_wrapper {
  width: 10vw;
  height: 10vh;
}

.icon_wrapper img {
  width: 10vw;
  height: 10vh;
}

.links_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.footer_socials_wrapper {
  display: flex;
  color: #3aaee1;
  text-align: right;
}

.social {
  margin-right: .5vw;
  margin-bottom: .5vh;
  transition: .5s;
}

.social:hover {
  color: white;
  text-shadow: 3px 3px 3px black;
}

.btn_wrapper {
  display: flex;
  justify-content: space-around;
  line-height: 10vh;
}

.btn_wrapper button {
  width: 7vw;
  height: 10vh;
  background: none;
  border: none;
  color: white;
  transition: .5s;
  font-size: 2rem;
}

.btn_wrapper button:hover {
  color: #3aaee1;
  text-shadow: 3px 3px 3px black;
  letter-spacing: 1px;
}
.copyright {
  align-self: flex-end;
  color: white;
  margin-bottom: 1vh;
}
${'' /* Home Page Styles */}
.home_container {
  display: flex;
  flex-direction: column;
  gap: 12vh;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  background-color: #e6e6e6;
  box-shadow: 0px 5px 30px black;
  border-radius: 0 0 15px 15px;
  margin-bottom: 5vh;
}

.home_container .hero_text_wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50vw;
  height: 30vh;
  margin-top: 12vh;
  margin-bottom: 15vh;
  text-align: center;
  color: white;
  text-shadow: black 1px 0 10px;
  box-shadow: 10px 5px 5px black, inset -5px -5px 10px black;
  border-radius: 15px;
  padding: 2vh 2vw;
  z-index: 0;
}


.home_container .hero_text_wrapper img {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 0;
  border-radius: 15px;
}

.home_container .hero_text_wrapper h1 {
  z-index: 1;
  font-size: 3rem;
}

.home_container .hero_text_wrapper h2 {
  z-index: 1;
  font-size: 2rem;
}

.home_container .hero_text_wrapper p {
  z-index: 1;
  font-size: 1.5rem;
}

.home_container .contact_btn {
  width: 10vw;
  height: 5vh;
  background: linear-gradient(90deg, rgba(58, 174, 225, 1) 0%, rgba(95, 205, 254, 1) 47%, rgba(58, 174, 225, 1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 3px;
  transition: 0.5s;
  font-size: 1.5rem;
  font-weight: 900;
}

.home_container .contact_btn:hover {
  box-shadow: 10px 5px 5px grey;
  color: white;
}

.home_container .video_sample {
  text-align: center;
}

.home_container .video_sample h1 {
  margin-bottom: 1vh;
}

.home_container .video_sample iframe {
  box-shadow: 10px 5px 5px black;
  border-radius: 15px;
}

.home_container .steps_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
  width: 50vw;
  margin-bottom: 5vh;
  text-align: center;
  background: linear-gradient(180deg, rgba(55, 55, 55, 1) 0%, rgba(24, 24, 24, 1) 28%, rgba(0, 0, 0, 1) 100%);
  border: solid darkslategrey;
  border-radius: 15px;
  box-shadow: 10px 5px 5px black;
}

.home_container .steps_wrapper h1 {
  font-size: 3rem;
  color: white;
}

.home_container .steps_wrapper .steps_options {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.home_container .steps_wrapper .steps_options .step {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(58, 174, 225, 1) 0%, rgba(95, 205, 254, 1) 47%, rgba(58, 174, 225, 1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 5px;
  height: 20vh;
  width: 15vw;
}

.home_container .steps_wrapper .steps_options .step h1 {
  font-size: 2rem;
  font-weight: 900;
  color: rgba(55, 55, 55, 1);
  margin-bottom: 3vh;
}

${'' /* About page styles */}
.about_container {
  display: flex;
  flex-direction: column;
  gap: 12vh;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  height: 100%;
  margin-bottom: 5vh;
  padding-bottom: 5vh;
  background-color: #e6e6e6;
  box-shadow: 0px 5px 30px black;
  border-radius: 0 0 15px 15px;
  z-index: 1;
  overflow: hidden;
}

.about_container .card {
  display: none; /* Hide all cards by default */
}

.about_container .card.active {
  display: block; /* Show active card */
  height: 50vh;
}

.about_container .card.active img {
  height: 50vh;
}

.about_container .deck_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 60vw;
  background: radial-gradient(circle, rgba(79,209,224,1) 0%, rgba(230,230,230,1) 49%);
}

.about_container .deck {
  position: relative; /* Ensure cards are positioned relative to the deck */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
  width: 25vw;
}

.about_container button {
  font-size: 10rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5vh 5vw;
  width: 3vw;
  transition: .5s;
}

.about_container button:hover {
  font-size: 15rem;
}

.about_container .squares {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

.about_container .about_square {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 20vw;
  text-align: center;
  background-color: #d6d6d6;
  border-radius: 20px;
  box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
  transition: .5s;
}

.about_container .about_square h1 {
  font-size: 3rem;
}

.about_container .about_square p {
  width: 11vw;
}

.about_container .about_square:hover {
  box-shadow: inset 0px 0px 10px 15px white, 0px 0px 10px 10px black;
  z-index: 1;
  position: relative;
  transform: scale(1.2);
}

.about_container .group_picture img,
.about_container .gaming_picture img,
.about_container .jersey_picture img{
  height: 100%;
  width: 20vw;
  border-radius: 20px;
  box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
  transition: 0.5s;
}

.about_container .group_picture img:hover,
.about_container .gaming_picture img:hover,
.about_container .jersey_picture img:hover {
  box-shadow: inset 0px 0px 10px 15px white, 0px 0px 20px 15px black;
  z-index: 2;
  position: relative;
  transform: scale(1.2);
}


${'' /* Portfolio Styles */}

.portfolio_container {
  display: flex;
  flex-direction: column;
  gap: 12vh;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  margin-bottom: 5vh;
  padding-bottom: 5vh;
  background-color: #e6e6e6;
  box-shadow: 0px 5px 30px black;
  border-radius: 0 0 15px 15px;
  z-index: 1;
  overflow: hidden;
}

.portfolio_container .filters {
  display: flex;
  width: 20vw;
  height: 5vh;
}

.portfolio_container .filters button {
  width: 5vw;
  min-width: 75px;
  font-size: 1.5rem;
}

.portfolio_container .video_grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  width: 100%;
}

.portfolio_container .video_grid h3 {
  font-size: 2rem;
  width: 30vw;
  height: 7vh;
  margin: 1vh 1vw;
  padding: 1vh 1vw;
  line-height: 3vh;
  background-color: aliceblue;
  border: solid grey;
  border-radius: 15px;
}

.portfolio_container .video_grid p {
  font-size: 1.5rem;
  width: 30vw;
  height: 7vh;
  margin: 1vh 1vw;
  padding: 1vh 1vw;
  background-color: aliceblue;
  border: solid grey;
  border-radius: 15px;
}

.contact_container {
  display: flex;
  flex-direction: column;
  gap: 5vh;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  background-color: #e6e6e6;
  box-shadow: 0px 5px 30px black;
  border-radius: 0 0 15px 15px;
  margin-bottom: 5vh;
}

.contact_container .title_container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 30vh;
  width: 100%;
  color: white;
  position: relative;
  overflow: hidden;
}

.contact_container .title_container .contact_title_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  opacity: 0.8;
}

.contact_container .title_container h1 {
  font-size: 5rem;
  background-color: rgba($color: black, $alpha: 0.3);
  height: 100%;
  width: 100%;
  line-height: 18vh;
  z-index: 1;
}

.contact_container .title_container p {
  font-size: 2rem;
  background-color: rgba($color: black, $alpha: 0.3);
  height: 100%;
  width: 100%;
  z-index: 1;
}

.contact_container .new_clients {
  font-size: 1.7rem;
  height: 5vh;
}

.contact_container .ad_squares {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  width: 50vw;
}

.contact_container .ad_squares .ad_square {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 5px;
  height: 15vh;
  width: 10vw;
}

.contact_container .ad_squares .ad_square p {
  font-size: 1.7rem;
}

.contact_container .form_wrapper {
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: 10vh;
  width: 15vw;
}

.contact_container .form_wrapper .form_selection {
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: 10vh;
  width: 15vw;
}

.contact_container .form_wrapper .form_selection button {
  height: 5vh;
  width: 7vw;
  background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 2px;
  transition: 0.5s ease-in-out;
}

.contact_container .form_wrapper .form_selection button:hover {
  border: white;
  color: white;
}

${'' /* Contact Form Styles */}

.form_container {
  position: absolute;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #000000, $alpha: .5);
  width: 100%;
  height: 100%;
}

.form_container form {
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 30vh;
}

.form_container input {
  height: 5vh;
  text-align: center;
  font-size: 2rem;
  background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 2px;
  transition: 0.5s ease-in-out;
}

.form_container textarea {
  height: 20vh;
  text-align: center;
  font-size: 2rem;
  background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 2px;
  transition: 0.5s ease-in-out;
}

.form_container button {
  height: 5vh;
  font-size: 2rem;
  background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 2px;
  transition: 0.5s ease-in-out;
}

.form_container button:hover {
  border: solid 2px white;
  color: white;
}
.confirmation_wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: .5);
}
    
.confirmation_wrapper p {
  height: 10vh;
  width: 10vw;
  line-height: 10vh;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 2px;
  transition: 0.5s ease-in-out;
}

.confirmation_wrapper button {
  height: 3vh;
  width: 10vw;
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 2px;
  transition: 0.5s ease-in-out;
}

.confirmation_wrapper button:hover {
  border: solid 2px white;
  color: white;
}
`;

export default GlobalStyle;
