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
      return response.json()
    })
    .then(json => {
      console.log('json ping');
      dispatch({
        type: MESSAGE_READ_SUCCESS,
        payload: json,
      });
    })
    .catch(error => {
      console.log('Message retrieval failed: ', error.toString());
      dispatch({
        type: MESSAGE_READ_FAILURE,
        payload: error.toString(),
      });
    }) 
  }
};