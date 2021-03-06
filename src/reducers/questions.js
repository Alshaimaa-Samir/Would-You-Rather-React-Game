import {ADD_QUESTION_ANSWER, ADD_QUESTION, RECEIVE_QUESTIONS} from '../actions/questions'

export default function questions(state = {}, action){
	
  	switch(action.type){
        case RECEIVE_QUESTIONS:	
        	return {
    		...state,
        	...action.questions
    		}
    
      	case ADD_QUESTION_ANSWER:
    		return{
        		...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.selectedOption]: {
                        ...state[action.questionId][action.selectedOption],
                        votes: state[action.questionId][action.selectedOption].votes.concat([action.authedUser])
                    }
                }
            }
        
	  	case ADD_QUESTION:
        	return{
        		...state,
          		[action.question.id] : action.question,
              	
        	}
      	default:
        	return state
    }
}