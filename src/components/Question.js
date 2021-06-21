import React from 'react';
import {connect} from 'react-redux';
import {formatQuestion} from "../utils/helpers";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

const Question = (props) => {
    const {question} = props;

    if (question === null) {
        return <p>This question doesn't exist.</p>
    }

    const {name, id, avatar, optionOne, optionTwo, hasVoted} = question;

    if (props.category ==='answered' ? !hasVoted : hasVoted) {
        return false;
    } 
  
    let question_link = (props.category==='answered'?`/question/${id}/results` : `/question/${id}`);
	

    return (
	<div>
      	<br/>
    	<div className='corners'>
      		<h3><b>{name}</b> asks:</h3><hr/>
      		<div className='container'>
      			<div className='col-sm-5 border-right center'>
      				<img src={avatar} alt={'Avatar of '+name} className='img'/>
      			</div>
				<div className='col-sm-7'>
					<br/><b><h4>Would You Rather...</h4></b><br/>
					<h6 className='centerText'>{optionOne.text}
					<strong> OR </strong>{optionTwo.text}</h6>
					<br/><Link to={question_link}><Button className='fp'>View Poll</Button></Link>
				</div>
      		</div>
      	</div>
    </div>      
    )
};


function mapStateToProps({login, users, questions}, {id, category}) {
    const question = questions[id];

    return {
        authedUser: login.loggedInUser.id,
        question: formatQuestion(question, users[question.author], login.loggedInUser.id),
        category
    }
}

export default connect(mapStateToProps)(Question);