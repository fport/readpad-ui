import {
    TOAST_ACTION_REQUEST,
    TOAST_ACTION_SUCCESS,
    TOAST_ACTION_FAIL,
    TOAST_ACTION_CLEAR
} from '../constants/runtimeConstant'

export const runtimeReducer = (state = {}, action) => {
    switch (action.type) {
        case TOAST_ACTION_REQUEST:
            return { loading: false }
        case TOAST_ACTION_SUCCESS:
            return { loading: true, message: action.payload }
        case TOAST_ACTION_FAIL:
            return { loading: false }
        case TOAST_ACTION_CLEAR:
            return { loading: false, message: action.payload }
        default:
            return state
    }
}
