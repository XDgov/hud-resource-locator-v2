/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PropertyPage from 'containers/PropertyPage/Loadable';
import ResultsPage from 'containers/ResultsPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.main`
  display: block;
  margin: 0 auto;
  min-height: 100%;
  padding: 0;
  width: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - HUD Resource Locator"
        defaultTitle="HUD Resource Locator"
      >
        <meta name="description" content="Find housing assistance." />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={ResultsPage} />
        <Route path="/properties/:slug" component={PropertyPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
