const initialState = {
  items: [],
  loading: false,
  messageFilter: '',
  loadingMessage: false,
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

    case 'messages/added/start':
      return {
        ...state,
        loadingMessage: true,
      };

    case 'messages/added/success':
      return {
        ...state,
        items: state.items.push(action.payload),
        loadingMessage: false,
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

export const addedMessages = (myId, contactId, message) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/added/start',
    });

    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      body: JSON.stringify({
        myId: myId,
        contactId: contactId,
        type: 'text',
        content: message,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'messages/added/success',
          payload: json,
        });
      }).catch = (e) => {
      console.log(e);
    };
  };
};
