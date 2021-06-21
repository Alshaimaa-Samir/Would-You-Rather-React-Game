import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleLoginUser } from '../actions/authedUser'
import { handleGetUsers } from '../actions/users'
import { Redirect, withRouter } from 'react-router-dom'
import LoadingBar from "react-redux-loading";

class Login extends Component{
	state = {
      user: '',
    }
 	componentDidMount() {
        this.props.dispatch(handleGetUsers());
    }
  	handleChange = (e)=>{
      	const value= e.target.value
        this.setState(() => ({
          user: value,
        }))
      	
    }
	handleSubmit = (e) => {
      e.preventDefault()
      const { dispatch } = this.props
      dispatch(handleLoginUser(this.state.user))
    }

	render(){
       if (this.props.loading === true || !this.props.users) {
            return <div/>;
        }
		const {from} = this.props.location.state || {from: {pathname: '/'}};

        if (this.props.isAuthed) {
            return <Redirect to={from}/>;
        }

      return(
      	<div className='center50'>
        <LoadingBar />
        <div className='corners'>
        
        <div className='centerText'>
        <h3>Welcome to the Would You Rather App</h3>
        <h6>Please Sign in to Continue</h6>
        <hr/>
        <br/>
        <img src='https://cdn.worldvectorlogo.com/logos/react.svg' alt='Redux-Img' width='300' height='300'/>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label><b>Sign in</b></Form.Label>
            <Form.Control onChange={(e) => this.handleChange(e)} defaultValue="" as="select">
              <option value=""  disabled hidden>Select a User</option>            
              {Object.keys(this.props.users).map((user) => (
              <option value={this.props.users[user].id} key={this.props.users[user].id}>		
                  {this.props.users[user].name}
              </option>
            ))}
            </Form.Control>
              <br/>
            <Button type="submit" disabled={this.state.user===''} className='fp' >Sign in</Button>

          </Form.Group>
          </Form>
        </div>
		</div>
        </div>
    )
    }
}

function mapStateToProps ({ users, login }) {
  return {
    loading: users === null,
    users,
    isAuthed: login.authenticated
  }
}

export default withRouter(connect(mapStateToProps)(Login))