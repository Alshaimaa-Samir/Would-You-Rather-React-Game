import users from './users'
import login from './authedUser'
import questions from './questions'
import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading'


export default combineReducers({
  	users,
  	questions,
  	login,
  	loadingBar: loadingBarReducer
})