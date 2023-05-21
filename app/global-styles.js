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
  
  .nav_bar_wrapper {
    display: flex;
    width: 70vw;
    height: 15vh;
    justify-content: space-around;
    align-items: center;
    margin-left: 15vw;
    margin-right: 15vw;

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
      .social {
        margin-right: .5vw;
        margin-bottom: .5vh;
        transition: .5s;
      }

      .social:hover {
        color: white;
        text-shadow: 3px 3px 3px black;
      }
    }

    .btn_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
      
      .user_btns {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .edit_btns {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    
      .nav_btn{
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

    }
    button{
      width: 10vw;
      height: 5vh;
      background: none;
      border: none;
      color: white;
      transition: .5s;
      font-size: 2rem;
      text-decoration: none;
    }
    button:hover {
      color: #3aaee1;
      text-shadow: 3px 3px 3px black;
      letter-spacing: 1px;
    }
  }
}

${'' /* Footer Stlyes */}

.footer_bg {
  background: linear-gradient(180deg, rgba(55,55,55,1) 0%, rgba(24,24,24,1) 28%, rgba(0,0,0,1) 100%);      
  width: 100vw;
  height: 25vh;
  .footer_wrapper {
      display: flex;
      width: 70vw;
      height: 25vh;
      justify-content: space-around;
      align-items: center;
      margin-left: 15vw;
      margin-right: 15vw;

      
      .icon_wrapper {
        width: 10vw;
        height: 10vh;

        image {
          width: 10vw;
          height: 10vh;
        }
      }

      .links_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .socials_wrapper {
          display: flex;
          color: #3aaee1;
          text-align: right;
          
          .social {
              margin-right: .5vw;
              margin-bottom: .5vh;
              transition: .5s;
            }
            .social:hover {
              color: white;
              text-shadow: 3px 3px 3px black;
          }
        }

        .btn_wrapper {
          display: flex;
          justify-content: space-around;
          line-height: 10vh;

          button{
            width: 7vw;
            height: 10vh;
            background: none;
            border: none;
            color: white;
            transition: .5s;
            font-size: 2rem;

          }
          button:hover {
            color: #3aaee1;
            text-shadow: 3px 3px 3px black;
            letter-spacing: 1px;
          }
        }
      }
    .copyright {
      align-self: flex-end;
      color: white;
      margin-bottom: 1vh;
    }
  }
}

${'' /* Home page styles */}
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
  
.hero_text_wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 50vw;
  height: 30vh;
  overflow: hidden;
  z-index: 0;
  margin-top: 12vh;
  margin-bottom: 15vh;
  padding: 2vh 2vw;
  text-align: center;
  color: white;
  text-shadow: black 1px 0 10px;
  box-shadow: 10px 5px 5px black, inset -5px -5px 10px black;
  border-radius: 15px;

  .hero_section_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
    border-radius: 15px;
  }
  h1 {
    z-index: 1;
    font-size: 3rem;
  }
  h2 {
    z-index: 1;
    font-size: 2rem;
  }
  p {
    z-index: 1;
    font-size: 1.5rem;
  }
}
.contact_btn {
  width: 10vw;
  height: 5vh;
  background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
  box-shadow: 10px 5px 5px black, inset 0 0 10px white;
  border-radius: 10px;
  border: solid 3px;
  transition: .5s;
  font-size: 2rem;
  font-weight: 900;
}  
.contact_btn:hover {
  box-shadow: 10px 5px 5px grey;
  color: white;
}
.video_sample {
  text-align: center;

  h1 {
    margin-bottom: 1vh;
  }

  iframe {
    box-shadow: 10px 5px 5px black;
    border-radius: 15px;
  }
}
.steps_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
  width: 50vw;
  margin-bottom: 5vh;
  text-align: center;
  background: linear-gradient(180deg, rgba(55,55,55,1) 0%, rgba(24,24,24,1) 28%, rgba(0,0,0,1) 100%);
  border: solid darkslategrey;
  border-radius: 15px;
  box-shadow: 10px 5px 5px black;
  h1{
    font-size: 4rem;
    color: white;
  }

  .steps_options {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .step {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
      box-shadow: 10px 5px 5px black, inset 0 0 10px white;
      border-radius: 10px;
      border: solid 5px;
      height: 20vh;
      width: 15vw;
      h1 {
        font-size: 3rem;
        font-weight: 900;
        color: rgba(55,55,55,1);
        margin-bottom: 3vh;
      }
    }
  }
}
}

${'' /* About Page Styles */}
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

  .card {
    display: none; /* Hide all cards by default */
    
  }
  
  .card.active {
    display: block; /* Show active card */
    height: 50vh;

    img {
      height: 50vh;
    }
  }
  .deck_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 60vw;
    background: radial-gradient(circle, rgba(79,209,224,1) 0%, rgba(230,230,230,1) 49%);

      .deck {
      position: relative; /* Ensure cards are positioned relative to the deck */
      display: flex;
      justify-content: center;
      align-items: center;
      height: 45vh;
      width: 25vw;
      
    }

    button {
      font-size: 10rem;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5vh 5vw;
      width: 3vw;
      transition: .5s;
    }
    button:hover {
      font-size: 15rem;
    }
  }
  .squares {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    
    .about_square{
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
      
      h1 {
        font-size: 3rem;
      }

      p {
        width: 11vw;
      }
    }
    .about_square:hover {
      box-shadow: inset 0px 0px 10px 15px white, 0px 0px 10px 10px black;
      z-index: 1;
      position: relative;
      transform: scale(1.2);
    }
    .group_picture {
      height: 100%;
      width: 20vw;
      border-radius: 20px;
      box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
      transition: 0.5s;
    }
    
    .gaming_picture {
      height: 100%;
      width: 20vw;
      border-radius: 20px;
      box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
      transition: 0.5s;
    }

    .jersey_picture {
      height: 100%;
      width: 20vw;
      border-radius: 20px;
      box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
      transition: 0.5s;
    }
    .group_picture:hover, .gaming_picture:hover, .jersey_picture:hover {
      box-shadow: inset 0px 0px 10px 15px white, 0px 0px 20px 15px black;
      z-index: 2;
      position: relative;
      transform: scale(1.2);
    }
    img {
      height: 100%;
      width: 20vw;
      border-radius: 20px;
      box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
      transition: 0.5s;
    }
  }
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

  .filters {
    display: flex;
    width: 20vw;
    height: 5vh;

    button {
      width: 5vw;
      min-width: 75px;
      font-size: 1.5rem;
    }
  }
  .video_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    width: 100%;

    h3 { 
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
    p {
      font-size: 1.5rem;
      width: 30vw;
      height: 7vh;
      margin: 1vh 1vw;
      padding: 1vh 1vw;
      background-color: aliceblue;
      border: solid grey;
      border-radius: 15px;
    }
  }
}

${'' /* Contact Page Stlyes */}

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

  .title_container {
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

    .contact_title_bg {
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

    h1 {
      font-size: 5rem;
      background-color: rgba($color: black, $alpha: 0.3);
      height: 100%;
      width: 100%;
      line-height: 18vh;
      z-index: 1;
    }
    p {
      font-size: 2rem;
      background-color: rgba($color: black, $alpha: 0.3);
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }

  .new_clients {
    font-size: 2rem;
    height: 5vh;
  }

  .ad_squares {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
    width: 50vw;

    .ad_square {
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

      p {
        font-size: 2rem;
      }
    }
  }
  .form_wrapper {
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 10vh;
    width: 15vw;

    .form_selection {
      display: flex;
      justify-content: space-around;
      align-content: center;
      height: 10vh;
      width: 15vw;

      button {
        height: 5vh;
        width: 7vw;
        background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
        box-shadow: 10px 5px 5px black, inset 0 0 10px white;
        border-radius: 10px;
        border: solid 2px;
        transition: 0.5s ease-in-out;

        &:hover {
          border: white;
          color: white;
        }
      }
    }
  }
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

  form {
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 30vh;

    input {
      height: 5vh;
      text-align: center;
      font-size: 2rem;
      background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
      box-shadow: 10px 5px 5px black, inset 0 0 10px white;
      border-radius: 10px;
      border: solid 2px;
      transition: 0.5s ease-in-out;
    }

    textarea {
      height: 20vh;
      text-align: center;
      font-size: 2rem;
      background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
      box-shadow: 10px 5px 5px black, inset 0 0 10px white;
      border-radius: 10px;
      border: solid 2px;
      transition: 0.5s ease-in-out;
    }

    button {
      height: 5vh;
      font-size: 2rem;
      background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
      box-shadow: 10px 5px 5px black, inset 0 0 10px white;
      border-radius: 10px;
      border: solid 2px;
      transition: 0.5s ease-in-out;

      &:hover {
        border: solid 2px white;
        color: white;
      }
    }
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
    
    p {
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

    button {
      height: 3vh;
      width: 10vw;
      font-size: 1.5rem;
      font-weight: 900;
      background: linear-gradient(90deg, rgba(58,174,225,1) 0%, rgba(95,205,254,1) 47%, rgba(58,174,225,1) 100%);
      box-shadow: 10px 5px 5px black, inset 0 0 10px white;
      border-radius: 10px;
      border: solid 2px;
      transition: 0.5s ease-in-out;

      &:hover {
        border: solid 2px white;
        color: white;
      }
    }
  }
}
`;

export default GlobalStyle;
