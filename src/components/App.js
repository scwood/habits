import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './Layout';
import HeaderContainer from './HeaderContainer';
import LandingPageContainer from './LandingPageContainer';
import HabitForm from './HabitForm';
import HabitListContainer from './HabitListContainer';
import {
  isFetchingUser,
  isAuthenticated,
  listenForAuthChanges,
} from '../store/user';

const propTypes = {
  listenForAuthChanges: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetchingUser: PropTypes.bool.isRequired,
};

const App = (props) => {
  useEffect(props.listenForAuthChanges);

  if (props.isFetchingUser) {
    return null;
  }
  if (props.isAuthenticated) {
    return (
      <BrowserRouter basename="/habit-tracker">
        <Layout>
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={HabitListContainer} />
            <Route exact path="/habits/new" component={HabitForm} />
            <Route exact path="/habits/:id" component={HabitForm} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
  return <LandingPageContainer />;
};

App.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    isFetchingUser: isFetchingUser(state),
    isAuthenticated: isAuthenticated(state),
  };
};

const mapDispatchToProps = {
  listenForAuthChanges,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
