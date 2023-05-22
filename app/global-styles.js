import { createGlobalStyle } from 'styled-components';
import { NavBarStyles } from './containers/HeaderFooter/navStyles';
import { FooterStyles } from './containers/HeaderFooter/footerStyles';
import { PortfolioStyles } from './containers/PortfolioPage/styles';
import { HomePageStyles } from './containers/HomePage/styles';
import { ContactStyles } from './containers/ContactPage/styles';
import { AboutPageStyles } from './containers/AboutPage/styles';
import { ContactFormStyles } from './components/ContactForm/contactFormStyles';
import { CardStyles } from './components/cards/cardStyles';

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
  ${NavBarStyles}
  ${FooterStyles}
  ${HomePageStyles}
  ${AboutPageStyles}
  ${CardStyles}
  ${PortfolioStyles}
  ${ContactStyles}
  ${ContactFormStyles}
`;

export default GlobalStyle;
