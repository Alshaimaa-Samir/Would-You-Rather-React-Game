import React, {Component} from 'react'
import { connect } from 'react-redux'

class Player extends Component{
	render(){
      return(
        <div className='corners'>
    	<div className="container">
            <br/>  
        	<div><img className='img'
              src={this.props.user.avatarURL}
              alt={'Avatar of ' + this.props.user.name}
              width='400' height='400'
            	/></div>
              <div className='centerText'>
				<b><h3>{this.props.user.name}</h3></b>
				<br/><br/>
				<div className='container'>
                  <p>Answered Questions</p>
                  <div><p className='right'>{Object.keys(this.props.user.answers).length}</p></div>
				</div>
				<hr/>
				<div className='container'>
                  <p>Created Questions</p>
                  <div><p className='right'>{this.props.user.questions.length}</p></div>
				</div>
			</div>
              <div className='centerText'>
				<br/>
				<b><h5>Score</h5></b>
				<hr/><div className='center50'>
				<div className='circle'>{Object.keys(this.props.user.answers).length + this.props.user.questions.length}</div></div>

			  </div>

          </div>
	</div>
    ) 
    } 
  
  
}

function mapStateToProps({users}, {id}){
  	return {
		user: users[id],
	}
}

export default connect(mapStateToProps)(Player);