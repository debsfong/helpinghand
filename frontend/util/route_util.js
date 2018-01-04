import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const ProtectedLoggedInRoute = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const ProtectedLoggedInComponent = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      null
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(ProtectedLoggedInRoute));
export const ProtectedComponent = withRouter(connect(mapStateToProps, null)(ProtectedLoggedInComponent));
