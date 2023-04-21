import { createStore } from 'redux';

const initialState = {
  radioButtonValue: 'option1',
  choosedValue : 'choose1'
};

const reducer=(state = initialState, action)=> {
  switch (action.type) {
    case 'SELECT_RADIO_BUTTON':
      return { ...state, radioButtonValue: action.payload };
    case 'SELECT_USER_TYPE':
      console.log('pppppppp',action);
      return { ...state, choosedValue: action.payload };
    default:
      return state;
  }
}

export const store = createStore(reducer);
