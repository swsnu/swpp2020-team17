import * as actionTypes from '../actions/actionTypes';

const initialState = {
  heros: [
  ],
  selectedHero: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_HERO:
      const newHero = {
        id: action.id,
        name: action.name,
        age: action.age,
      };
      return { ...state, heros: state.heros.concat(newHero) };

    case actionTypes.PUT_HERO:
      const modified = {
        id: action.id,
        name: action.name,
        age: action.age,
      };
      return { ...state, heros: modified }

    case actionTypes.GET_HERO:
      return { ...state, selectedHero: action.target };

    case actionTypes.GET_ALL:
      return { ...state, heros: action.heros };

    default:
      break;
  }
  return state;
};

export default reducer;