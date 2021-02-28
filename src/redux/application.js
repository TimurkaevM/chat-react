const LOAD = 'user/load/start';
const SUCCESS = 'user/load/saccess';

const initialState = {
  items: {},
  loading: false,
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
