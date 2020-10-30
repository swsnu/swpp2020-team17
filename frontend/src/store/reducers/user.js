import * as actionTypes from '../actions/actionTypes';

initialState = {
    currentUser: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return;
    }
};

export default reducer;