import {
  defaultAuthenticatedRoute,
  defaultUnauthenticatedRoute,
  getAllRoutesArray,
} from 'configurations/routing/AppNavigation';
import isAuthenticated from 'utils/global';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const AuthenticatedRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      return isAuthenticated() ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: defaultUnauthenticatedRoute,
            state: { from: location },
          }}
        />
      );
    }}
  />
);

const UnauthenticatedRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      return isAuthenticated() ? (
        <Redirect
          to={{
            pathname: defaultAuthenticatedRoute,
            state: { from: location },
          }}
        />
      ) : (
        children
      );
    }}
  />
);

const allappRoutes = getAllRoutesArray();

const routes = allappRoutes.map((route, index) => {
  const { component: Component } = route;
  return route.needAuth ? (
    <AuthenticatedRoute key={route.path} path={route.path} exact={route.exact}>
      <Component />
    </AuthenticatedRoute>
  ) : (
    <UnauthenticatedRoute
      key={route.path}
      path={route.path}
      exact={route.exact}
    >
      <Component />
    </UnauthenticatedRoute>
  );
});

const ApplicationRouter = () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <>{routes}</>
      </Switch>
    </Suspense>
  </Router>
);

export default ApplicationRouter;
