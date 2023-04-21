export const selectRadioButton = (value) => {
  return {
    type: 'SELECT_RADIO_BUTTON',
    payload: value,
  };
};
export const selectUserType = (value) => {
  return {
    type: 'SELECT_USER_TYPE',
    payload: value,
  };
};