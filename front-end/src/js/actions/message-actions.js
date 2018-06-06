// export const MESSAGE_CREATE = 'MESSAGE_CREATE';
export const MESSAGE_READ_BEGIN = 'MESSAGE_READ_BEGIN';
export const MESSAGE_READ_SUCCESS = 'MESSAGE_READ_SUCCESS';
export const MESSAGE_READ_FAILURE = 'MESSAGE_READ_FAILURE';

export function messageRead() {
  return (dispatch) => {
    dispatch({
      type: MESSAGE_READ_BEGIN,
    });
    fetch('http://localhost:3000')
      .then(response => {
        console.log('response: ', response);
        return response.json();
      })
      .then(json => {
        console.log('json ping');
        dispatch({
          type: MESSAGE_READ_SUCCESS,
          payload: json,
        });
      })
      .catch(error => {
        console.log('failure ping');
        dispatch({
          type: MESSAGE_READ_FAILURE,
          payload: `Message retrieval failed: ${error.toString()}`,
        });
      });
  };
};
//Message Create
export const MESSAGE_CREATE_BEGIN = 'MESSAGE_CREATE_BEGIN';
export const MESSAGE_CREATE_SUCCESS = 'MESSAGE_CREATE_SUCCESS';
export const MESSAGE_CREATE_FAILURE = 'MESSAGE_CREATE_FAILURE';

export function messageCreate(messageObj) {
  return (dispatch) => {
    dispatch({
      type: MESSAGE_CREATE_BEGIN,
    });
    fetch('http://localhost:3000/messages', {
      method: 'post',
      body: JSON.stringify(messageObj),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('response: ', response);
        return response.json();
      })
      .then(json => {
        console.log('json ping');
        dispatch({
          type: MESSAGE_CREATE_SUCCESS,
          payload: json,
        });
      })
      .catch(error => {
        console.log('failure ping');
        dispatch({
          type: MESSAGE_CREATE_FAILURE,
          payload: `Message creation failed: ${error.toString()}`,
        });
      });
  };
};