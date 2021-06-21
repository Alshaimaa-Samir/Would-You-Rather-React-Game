import React, {Component} from 'react'
import { connect } from 'react-redux'
import Player from './Player'
import {handleGetUsers} from '../actions/users'

class Leaderboard extends Component{
  componentDidMount() {
    this.props.dispatch(handleGetUsers());
  }	
  render(){
      return(
      <div className='center50'>
        {this.props.userIds.map((id) => (
            
        	<div key={id}>
				<br/>
				<Player id={id}/>
            </div>
          ))}
      </div>
      
    )}


} 

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
      .sort((a,b) => ((Object.keys(users[b].answers).length) + users[b].questions.length) - 
            		 ((Object.keys(users[a].answers).length) + users[a].questions.length))
  }
}

export default connect(mapStateToProps)(Leaderboard);