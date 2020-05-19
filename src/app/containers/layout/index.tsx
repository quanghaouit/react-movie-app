import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from 'router/routes';

const DEFAULT_ROUTE = '/homepage';
const DEFAULT_404 = '/404';
const loading = () => <div>Loading....</div>;
export function Layout() {
  return (
    <>
      <h1>header</h1>
      <hr />
      <Suspense fallback={loading()}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route<any> key={idx} path={route.path} exact={route.exact || false} name={route.name} render={props => (route.component ? <route.component {...props} /> : null)} />
            ) : null;
          })}
          <Redirect exact from="/" to={DEFAULT_ROUTE} />
          <Redirect from="*" to={DEFAULT_404} />
        </Switch>
      </Suspense>
      <hr />
      <h1>footer</h1>
    </>
  );
}
