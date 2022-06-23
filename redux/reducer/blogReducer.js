import {
    BLOG_CREATE_REQUEST,
    BLOG_CREATE_SUCCESS,
    BLOG_CREATE_FAIL,
    GET_USER_BLOGS_REQUEST,
    GET_USER_BLOGS_SUCCESS,
    GET_USER_BLOGS_FAIL,
    GET_ALL_BLOGS_REQUEST,
    GET_ALL_BLOGS_SUCCESS,
    GET_ALL_BLOGS_FAIL
} from '../constants/blogAction'

export const blogReducer = (
    state = {
        loading: false,
        blogInfo: {},
        blogs: []
    },
    action
) => {
    switch (action.type) {
        case BLOG_CREATE_REQUEST:
            return { ...state, loading: true }
        case BLOG_CREATE_SUCCESS:
            return { ...state, loading: false, blogInfo: action.payload }
        case BLOG_CREATE_FAIL:
            return { ...state, loading: false, error: action.payload }
        case GET_USER_BLOGS_REQUEST:
            return { ...state, loading: true }
        case GET_USER_BLOGS_SUCCESS:
            return { ...state, loading: false, blogs: action.payload.data }
        case GET_USER_BLOGS_FAIL:
            return { ...state, loading: false, error: action.payload }
        case GET_ALL_BLOGS_REQUEST:
            return { ...state, loading: true }
        case GET_ALL_BLOGS_SUCCESS:
            return { ...state, loading: false, blogList: action.payload.data }
        case GET_ALL_BLOGS_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
