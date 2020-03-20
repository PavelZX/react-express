import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

import getProfileFetch from './actions/user';
import Signup from './components/Signup';
import Login from './components/Login';

import Create from './components/create';
import Edit from './components/edit';
import Index from './components/index';
import Show from './components/show';
import PrivateRoute from './components/auth';

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  handleClick = event => {
    event.preventDefault()
    // Удаление token из localStorage
    localStorage.removeItem("token")
    // удаление из Redux хранилица
    this.props.logoutUser()
  }

  render() {
    return (
      <>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/' component={ Index } />
              <Route path="/signup" component={ Signup }/>
              <Route path="/login" component={ Login }/>
              <PrivateRoute path='/create' component={ Create } />
              <PrivateRoute path='/edit/:id' component={ Edit } />
              <PrivateRoute path='/index' component={ Show } />
          </Switch>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
