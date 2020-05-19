import React from 'react';
import { Route } from 'react-router-dom';

interface IBeforeRoute {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}
export const RouteExtension = ({ component: Component, ...otherProps }: IBeforeRoute) => {
  const AfterRoute = () => {
    console.warn(`>>>>>>>>> AfterRoute`, otherProps);
  };

  return (
    <>
      <Route
        render={otherProps => (
          <>
            <Component {...otherProps}>{AfterRoute()}</Component>
          </>
        )}
      />
    </>
  );
};
