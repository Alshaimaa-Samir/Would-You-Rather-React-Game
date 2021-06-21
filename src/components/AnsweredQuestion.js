import React from 'react';
import {connect} from 'react-redux';
import PageNotFound from './PageNotFound';

const AnsweredQuestion = (props) => {
    const {question, author, pageNotFound, authedUser} = props;

    if (pageNotFound === true) {
        return <PageNotFound/>;
    }

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;

    const optionSelected = question.optionOne.votes.includes(authedUser.loggedInUser.id) ? "optionOne" : (question.optionTwo.votes.includes(authedUser.loggedInUser.id)?"optionTwo" : "NotYet");

    let optionOneWidth = Math.round((question.optionOne.votes.length / totalVotes) * 100);
    let optionTwoWidth = 100-optionOneWidth;

    return (
      <div className='center50'>
      	<br/>
    	<div className='corners'>
      		<h3><b>{author.name}</b> asks:</h3><hr/>
      		<div className='container'>
      			<div className='col-sm-4 left '>
      				<img src={author.avatarURL} alt={'Avatar of '+author.name} className='img'/>
      			</div>
				<div className='col-sm-8 '>
					<br/><b><h4>Would You Rather...</h4></b><br/>
    <div className='question-info'>
    	<div>
		  <div className='container'>
		  	<b>{question.optionOne.text}?</b>
			{optionSelected==="optionOne" && (<div className='right'><img className='star' alt='Your Choice' src="https://img.icons8.com/fluent/96/000000/star.png"/></div>)}
          </div>
		  <div className="progress m-progress--sm">
          	<div className="progress-bar m--bg-success" style={{ width: optionOneWidth + '%' }}></div>
          </div>
          <div>
            <span><b>{question.optionOne.votes.length}</b> out of <b>{totalVotes}</b> votes. ({optionTwoWidth}%)</span>
          </div>
    	</div>

    	<div>
		  <div className='container'>
			<b>{question.optionTwo.text}?</b>
			{optionSelected==="optionTwo" && (<img className='star' alt='Your Choice' src="https://img.icons8.com/fluent/96/000000/star.png"/>)}
		  </div>
          <div className="progress m-progress--sm">
              <div className="progress-bar m--bg-success" style={{ width: optionTwoWidth + '%' }}></div>
          </div>
          <div>
              <span><b>{question.optionTwo.votes.length}</b> out of <b>{totalVotes}</b> votes. ({optionTwoWidth}%)</span>
          </div>
              <p>You Chose Option <b>{optionSelected==='optionOne'? 1 : (optionSelected==='optionTwo'?2:'Not Yet')}</b> </p>                                                                                 
    	</div>
    </div>
</div>
</div>
</div>
</div>     
    )
};

function mapStateToProps({login, questions, users}, props) {
    const {id} = props.match.params;

    let pageNotFound = true;
    let author = "";
    let specificQuestion = "";

    if (questions[id] !== undefined) {
        pageNotFound = false;
        specificQuestion = questions[id];
        author = users[specificQuestion['author']];
    }

    return {
        id,
        question: specificQuestion,
        author: author,
        pageNotFound: pageNotFound,
      	authedUser: login
    }
}

export default connect(mapStateToProps)(AnsweredQuestion);