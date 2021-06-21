import React, { Component, Fragment } from 'react';

import './App.css'
import {connect} from 'react-redux'
import {LoadingBar} from 'react-redux-loading'
import {handleGetQuestions} from '../actions/questions'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import NavBar from './NavBar'
import Logout from './Logout'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import PrivateRoute from './PrivateRoute'
import PageNotFound from './PageNotFound'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleGetQuestions())
  }
  render() {
    
    return (
      <Router>
        <Fragment>
          <LoadingBar />
      		{this.props.authenticated == null? null : <NavBar loggedInUser={this.props.loggedInUser}/>}
      <div>
      	{this.props.loading === true? null:
      	<div>    
      		<Switch>
              <PrivateRoute authed={this.props.authenticated} path='/' exact component={Home} />
              <PrivateRoute authed={this.props.authenticated} path='/question/:id' exact component={UnansweredQuestion}/>
			  <PrivateRoute authed={this.props.authenticated} path='/question/:id/results' exact component={AnsweredQuestion}/>
              <PrivateRoute authed={this.props.authenticated} path='/leaderboard' exact component={Leaderboard}/>
              <PrivateRoute authed={this.props.authenticated} path='/add' exact component={NewQuestion}/>
			  <Route path='/login' exact component={Login} />
			  <Route path='/logout' exact component={Logout} />
              <Route component={PageNotFound} />
			</Switch>
          </div>
		}
		</div>
      </Fragment>
	</Router>
);
}}


function mapStateToProps ({ users, login }) {
  
  return {
    loading: false,
    loggedInUser: login.loggedInUser,
    authenticated: login.authenticated,
  }
}
export default connect(mapStateToProps)(App);
