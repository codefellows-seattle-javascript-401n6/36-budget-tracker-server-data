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
        'Accept': 'application/json',//response
        'Content-Type': 'application/json',//body
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

//Message Delete
export const MESSAGE_DELETE_BEGIN = 'MESSAGE_DELETE_BEGIN';
export const MESSAGE_DELETE_SUCCESS = 'MESSAGE_DELETE_SUCCESS';
export const MESSAGE_DELETE_FAILURE = 'MESSAGE_DELETE_FAILURE';

export function messageDelete(id) {
  return (dispatch) => {
    dispatch({
      type: MESSAGE_DELETE_BEGIN,
    });
    fetch(`http://localhost:3000/messages/${id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => {
        console.log('response: ', response);
        return response.json();
      })
      .then(json => {
        console.log('json server response:', json);
        dispatch({//THIS object IS action  in reducer action.payload
          type: MESSAGE_DELETE_SUCCESS,//
          payload: json,//
        });//THIS object IS action  in reducer action.payload
      })
      .catch(error => {
        console.log('failure ping');
        dispatch({
          type: MESSAGE_DELETE_FAILURE,
          payload: `Message Delete failed: ${error.toString()}`,
        });
      });
  };
};

//Message Delete
export const MESSAGE_UPDATE_BEGIN = 'MESSAGE_UPDATE_BEGIN';
export const MESSAGE_UPDATE_SUCCESS = 'MESSAGE_UPDATE_SUCCESS';
export const MESSAGE_UPDATE_FAILURE = 'MESSAGE_UPDATE_FAILURE';

export function messageUpdate(messageObj) {
  return (dispatch) => {
    dispatch({
      type: MESSAGE_UPDATE_BEGIN,
    });
    fetch(`http://localhost:3000/messages/${messageObj.id}`, {
      method: 'put',
      body: JSON.stringify(messageObj),
      headers: {
        'Accept': 'application/json',//response
        'Content-Type': 'application/json',//body
      },
    })
      .then(response => {
        console.log('response: ', response);
        return response.json();
      })
      .then(json => {
        console.log('json ping');
        dispatch({
          type: MESSAGE_UPDATE_SUCCESS,
          payload: json,
        });
      })
      .catch(error => {
        console.log('failure ping');
        dispatch({
          type: MESSAGE_UPDATE_FAILURE,
          payload: `Message update failed: ${error.toString()}`,
        });
      });
  };
};