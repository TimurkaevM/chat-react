const initialState = {
  items: [],
  loading: false,
  messageFilter: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'messages/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'messages/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case 'set/messageFilter':
      return {
        ...state,
        messageFilter: action.payload,
      };
    default:
      return state;
  }
};

export const loadMessages = (id, myId) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/load/start',
    });
    fetch(
      `https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`,
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'messages/load/success',
          payload: json,
        });
      });
  };
};

export const setMessagesFilter = (messageFilter) => {
  return {
    type: 'set/messageFilter',
    payload: messageFilter,
  };
};
