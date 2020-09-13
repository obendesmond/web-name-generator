import { GET_KEYWORD, GET_SHORT_DESCRIPTION, GENERATE } from '../actions/types';

const initialState = {
    keyword: "",
    shortDescription:""
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_KEYWORD:
            return {
                ...state
            }
        default:
            return state;
    }
}