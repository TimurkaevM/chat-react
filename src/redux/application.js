const LOAD = 'user/load/start';
const SUCCESS = 'user/load/saccess';
const OPEN = 'questionnaire/open/success';

const initialState = {
  items: {},
  loading: false,
  open: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };

    case SUCCESS:
      return {
        ...state,
        items: action.payLoad,
      };

    case OPEN:
      return {
        ...state,
        open: !state.open,
      };

    default:
      return state;
  }
};

export function getUser() {
  return (dispatch) => {
    dispatch({
      type: LOAD,
    });

    fetch('https://api.intocode.ru:8001/api/profile')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: SUCCESS,
          payLoad: json,
        });
      });
  };
}

export function openQuestionnaire() {
  return {
    type: OPEN,
  };
}
