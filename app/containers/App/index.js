import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import About from '../AboutPage';
import Portfolio from '../PortfolioPage';
import Contact from '../ContactPage';
import NavBar from '../HeaderFooter/header';
import FooterNav from '../HeaderFooter/footer';

import GlobalStyle from '../../global-styles';
import { ContentProvider } from '../../utils/content';
import PrivateRoute from '../../utils/privateRoute';
import VerifyPage from '../../components/Auth/VerifyPage';
import EditHome from '../AuthPages/EditHome';
import EditAbout from '../AuthPages/EditAbout';
import EditPortfolio from '../AuthPages/EditPortfolio';
import EditContact from '../AuthPages/EditContact';
import { AuthProvider } from '../../utils/authContext';
import LoadingSpinner from '../../components/Misc/loadingSpinner';

// Custom loading component
const CustomLoading = () => <LoadingSpinner />;

export default function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <ContentProvider>
            <div className="app">
              <NavBar />
              <Suspense fallback={<CustomLoading />}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={About} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/auth" component={VerifyPage} />
                  <PrivateRoute path="/edit-home" component={EditHome} />
                  <PrivateRoute path="/edit-about" component={EditAbout} />
                  <PrivateRoute
                    path="/edit-portfolio"
                    component={EditPortfolio}
                  />
                  <PrivateRoute path="/edit-Contact" component={EditContact} />
                  <Route component={NotFoundPage} />
                </Switch>
              </Suspense>
              <FooterNav />
            </div>
          </ContentProvider>
        </AuthProvider>
        <GlobalStyle />
      </Router>
    </div>
  );
}