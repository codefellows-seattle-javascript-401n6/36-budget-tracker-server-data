import { MESSAGE_READ_SUCCESS, MESSAGE_READ_FAILURE } from "../actions/message-actions";


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

    default:
      return state;
  }
};

export default messageReducer;
