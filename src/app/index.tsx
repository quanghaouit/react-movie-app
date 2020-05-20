/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Layout } from './containers/layout/Loadable';
export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s" defaultTitle="React Movie App">
        <meta name="description" content="A React Movie App" />
      </Helmet>
      <Switch>
        <Route path="/404" exact component={NotFoundPage} />
        <Route path="/" component={Layout} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
