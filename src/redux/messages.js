import { scrollChat } from '../components/scrollChat';

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
        items: [...state.items, { ...action.payload, sending: true }],
        loadingMessage: true,
      };

    case 'messages/added/success':
      return {
        ...state,
        items: state.items
          .map((item) => {
            if (item.requestId === action.payload.requestId) {
              return {
                ...action.payload,
                sending: false,
              };
            }
            return item;
          })
          .filter((item) => {
            return item.content !== undefined;
          }),
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
        scrollChat();
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
  const requestId = Math.random();

  return (dispatch) => {
    dispatch({
      type: 'messages/added/start',
      payload: {
        myId: myId,
        contactId: contactId,
        type: 'text',
        content: message,
        requestId: requestId,
      },
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
          payload: { ...json, requestId: requestId },
        });
        scrollChat();
      }).catch = (e) => {
      console.log(e);
    };
  };
};
