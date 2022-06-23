import {
    GET_COMMENT_REQUEST,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAIL
} from '../constants/commentAction'

export const commentReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_COMMENT_REQUEST:
            return { ...state, loading: true }
        case GET_COMMENT_SUCCESS:
            return { ...state, loading: false, commentList: action.payload.data }
        case GET_COMMENT_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
