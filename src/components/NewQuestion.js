import React, {Component} from 'react';
import { Button, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component{
	state = {
    	optionOne : '',
      	optionTwo : '',
      	toHome: false,
    }
	handleSubmit = (e) => {
      e.preventDefault()

      const { optionOne, optionTwo } = this.state
      const { dispatch } = this.props

      dispatch(handleAddQuestion(optionOne, optionTwo, () => {
            this.setState({
                optionOne: '',
                optionTwo: '',
                toHome: true
            });
        }));
  }
  handleChangeOp1 = (e) => {
      const text = e.target.value
      this.setState(() => ({
        ...this.state,
        optionOne: text
      }))
    }
	handleChangeOp2 = (e) => {
      const text = e.target.value
      this.setState(() => ({
        ...this.state,
        optionTwo: text
      }))
    }
	render(){
        const { optionOne, optionTwo } = this.state
		if (this.state.toHome === true) {
            return <Redirect to='/'/>;
        }
		return(
      		<div className='center50'>
             <div className='corners'>
               <h3 className='centerText'>Create New Question</h3>
               <hr/>
               <h6>Complete the Question:</h6>
               <strong><h4>Would you rather...</h4></strong>
               <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" value={optionOne} onChange={this.handleChangeOp1} placeholder="Enter Option One Text Here" />
                </Form.Group>
               	<h2 className='centerText'>OR</h2>
               <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" value={optionTwo} onChange={this.handleChangeOp2} placeholder="Enter Option Two Text Here" />
                </Form.Group>
         	 <Button type="submit" disabled={optionOne==='' || optionTwo===''} className='fp' >
                  Submit
                </Button>
              </Form>
             </div>
             </div>
         )}


}

export default connect()(NewQuestion)
