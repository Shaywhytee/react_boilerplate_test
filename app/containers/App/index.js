/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import About from '../AboutPage';
import Portfolio from '../PortfolioPage';
import Contact from '../ContactPage';
import NavBar from '../HeaderFooter/header';
import FooterNav from '../HeaderFooter/footer';
import AppBackground from '../../images/lol_wallpaper.jpg';

import GlobalStyle from '../../global-styles';
import { ContentProvider } from '../../utils/content';

export default function App() {
  return (
    <div>
      <Router>
        <ContentProvider>
          <div className="app">
            <img src={AppBackground} alt="background" className="app_bg" />
            <NavBar />
            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFoundPage} />
            </Switch>
            <FooterNav />
          </div>
        </ContentProvider>
        <GlobalStyle />
      </Router>
    </div>
  );
}
