import * as types from './ActionTypes';
import axios from 'axios';

const apiURL = 'http://localhost:3001/phones';

export function requestPhones() {
    return { type: types.REQUEST_PHONES} 
}

export function receivePhones(data) {
    return {
        type: types.RECEIVE_PHONES,
        phones: data
    };
}

export function fetchPhones() {
    return (dispatch) => {
        dispatch(requestPhones());
        return axios.get(apiURL)
            .then(function (response) {
                dispatch(receivePhones(response.data))
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}