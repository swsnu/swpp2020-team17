import * as actionTypes from '../actions/actionTypes';


const reducer = (state = {
    tagList: [],

}, action) => {
    switch (action.type) {
        case actionTypes.GetTagList:
            return {...state, tagList: action.tags};
        default:
            break;
    }
    return state
};

export default reducer;