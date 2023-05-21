/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react';
import Home from '../MainPage/index';
import Contact from '../ContactPage/index';
import About from '../AboutPage/index';
import Portfolio from '../PortfolioPage/index';
import NavBar from '../HeaderFooter/header';
import FooterNav from '../HeaderFooter/footer';
import { ContentProvider } from '../../utils/content';
import { AuthProvider } from '../../utils/authContext';
import AppBackground from '../../images/lol_wallpaper.jpg';

export default function HomePage() {
  return (
    <Router>
      <AuthProvider>
        <ContentProvider>
          <div className="app">
            <img src={AppBackground} alt="background" className="app_bg" />
            <NavBar />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <FooterNav />
          </div>
        </ContentProvider>
      </AuthProvider>
    </Router>
  );
}
