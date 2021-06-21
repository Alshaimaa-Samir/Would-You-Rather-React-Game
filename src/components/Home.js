import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import {Button} from 'react-bootstrap'
class Home extends Component {
  state = {
  	view: 'unanswered',
  }
  handleChange = (e, v)=>{
    this.setState({view:v})
}
  render() {
    return (
      <div className='center50'>
        <div>
          <Button type="button" className='hp' disabled={this.state.view==='unanswered'} 
      		onClick={(e)=>this.handleChange(e, 'unanswered')}>Unanswered Questions</Button>
		  <Button type="button" className='hp' disabled={this.state.view==='answered'} 
			onClick={(e)=>this.handleChange(e, 'answered')}>Answered Questions</Button>
		</div>
		<div >
		 {this.props.questionIds.map((id) => {return(
              <Question id={id} key={id} category={this.state.view}/>
          )})}
         <br/>
        
		</div>
		
      </div>
     )
   }
}

function mapStateToProps (state) {
  const {questions} = state
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    
  }
}


export default connect(mapStateToProps)(Home);
