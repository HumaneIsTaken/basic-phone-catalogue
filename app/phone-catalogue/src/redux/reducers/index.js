import { REQUEST_PHONES, RECEIVE_PHONES } from "../actions/ActionTypes";

const initialState = {
    isFetching: false,
    phones : []
}

function rootReducer(state = initialState, action) {
    switch (action.type){
        case REQUEST_PHONES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_PHONES:
            return Object.assign({}, state, {
                isFetching: false,
                phones: action.phones
            });
        default:
            return state;
    }
}

export default rootReducer;