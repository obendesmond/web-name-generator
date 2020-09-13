import { GET_KEYWORD, GET_SHORT_DESCRIPTION, GENERATE } from './types';

export const getKeyword = () => {
    alert('getting keyword now')
    return {
        type: GET_KEYWORD
    }
}