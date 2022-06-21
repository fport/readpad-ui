import { BLOG_CREATE_REQUEST, BLOG_CREATE_SUCCESS, BLOG_CREATE_FAIL } from '../constants/blogAction'

export const blogReducer = (state = {}, action) => {
    switch (action.type) {
        case BLOG_CREATE_REQUEST:
            return { loading: true }
        case BLOG_CREATE_SUCCESS:
            return { loading: false, blogInfo: action.payload }
        case BLOG_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
