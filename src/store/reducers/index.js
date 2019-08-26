import {createSelector} from 'reselect';
export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName
      };
     case UPDATE_LAST_NAME:
      return {
        ...state,
        firstName: action.lastName
      };
    default:
      return state;
  }
}
export const getFullName = createSelector(
  (state) => state.firstName,
  (state) => action.lastName,
  (firstName, lastName) => [firstName,lastName].join(' ')
);
