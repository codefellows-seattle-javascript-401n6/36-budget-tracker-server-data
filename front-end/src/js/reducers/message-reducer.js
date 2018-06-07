import { 
  MESSAGE_READ_SUCCESS, 
  MESSAGE_READ_FAILURE, 
  MESSAGE_CREATE_SUCCESS,
  MESSAGE_CREATE_FAILURE,
  MESSAGE_DELETE_SUCCESS,
  MESSAGE_DELETE_FAILURE,
} from "../actions/message-actions";


const initialState = {
  messages: [],
  error: null,
};

function messageReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let newList = [];
  let currentMessages;


  switch(action.type) {

    case MESSAGE_READ_SUCCESS:
      console.log('MESSAGE_READ_SUCCESS ACTION');
      return Object.assign(newState, state, {
        messages: action.payload,
        error: null,
      });

    case MESSAGE_READ_FAILURE:
      console.log('MESSAGE_READ_FAILURE ACTION');
      return Object.assign(newState, state, {error: action.payload});
    
    case MESSAGE_CREATE_SUCCESS:
      console.log('MESSAGE_CREATE_SUCCESS ACTION');
      newList = state.messages.map(array => {
        return array;
      });
      console.log('newList: ', newList);
      newList.push(action.payload);
      return Object.assign(newState, state, {messages: newList});

    case MESSAGE_CREATE_FAILURE:
      console.log('MESSAGE_CREATE_FAILURE ACTION');
      return Object.assign(newState, state, {error: action.payload});

    case MESSAGE_DELETE_SUCCESS:
      console.log('MESSAGE_DELETE_SUCCESS ACTION', action.payload.id);
      newList = state.messages.filter(element => {
        return element.id !== action.payload.id;
      });
      return Object.assign(newState, state, {messages: newList});
    
    case MESSAGE_DELETE_FAILURE:
      console.log('MESSAGE_DELETE_FAILURE ACTION');
      return Object.assign(newState, state, {error: action.payload});

    default:
      return state;
  }
};

export default messageReducer;
