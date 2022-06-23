import axios from '@utils/axios'
import {
    COMMENT_CREATE_REQUEST,
    COMMENT_CREATE_SUCCESS,
    COMMENT_CREATE_FAIL,
    GET_COMMENT_REQUEST,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAIL
} from '../constants/commentAction'
import { TOAST_ACTION_SUCCESS, TOAST_ACTION_CLEAR } from '../constants/runtimeConstant'

// COMMENT CREATE
export const create = (createData) => async (dispatch) => {
    try {
        dispatch({
            type: COMMENT_CREATE_REQUEST
        })

        const mappedData = {
            comment_author: createData.author,
            comment_content: createData.content,
            user_user_id: createData.userId,
            blogs_blog_id: createData.blogId
        }

        const res = await axios('comment', { method: 'POST', data: { ...mappedData } }).then(
            (response) => {
                dispatch({
                    type: COMMENT_CREATE_SUCCESS,
                    payload: {
                        isSuccesful: response?.data?.massage && true,
                        message: response?.data?.massage
                    }
                })
                dispatch({
                    type: TOAST_ACTION_SUCCESS,
                    payload: response?.data?.massage
                })
                setTimeout(() => {
                    dispatch({
                        type: TOAST_ACTION_CLEAR
                    })
                }, 1000)
            }
        )
    } catch (error) {
        dispatch({
            type: COMMENT_CREATE_FAIL,
            payload: 'Create Blog failed'
        })
        dispatch({
            type: TOAST_ACTION_SUCCESS,
            payload: 'Create Blog failed'
        })
        setTimeout(() => {
            dispatch({
                type: TOAST_ACTION_CLEAR
            })
        }, 1000)
    }
}

// GET COMMENT TO BLOG
export const getCommentsBlog =
    ({ id }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: GET_COMMENT_REQUEST
            })

            // const token = cookies.get('AUTH_TOKEN')
            // if (token) {
            //     axios.defaults.headers.common.Authorization = `Bearer ${token}`
            // }

            const res = await axios(`comment/all/${id}`, { method: 'GET' }).then((response) => {
                console.log('response', response?.data?.data)
                dispatch({
                    type: GET_COMMENT_SUCCESS,
                    payload: {
                        isSuccesful: response?.data?.massage && true,
                        data: response?.data?.data
                    }
                })

                // localStorage.setItem('blogInfo', JSON.stringify(response?.data?.data))

                dispatch({
                    type: TOAST_ACTION_SUCCESS,
                    payload: response?.data?.massage
                })
                setTimeout(() => {
                    dispatch({
                        type: TOAST_ACTION_CLEAR
                    })
                }, 1000)
            })
        } catch (error) {
            dispatch({
                type: GET_COMMENT_FAIL,
                payload: 'Get Blogs failed'
            })
            dispatch({
                type: TOAST_ACTION_SUCCESS,
                payload: 'Get Blogs failed'
            })
            setTimeout(() => {
                dispatch({
                    type: TOAST_ACTION_CLEAR
                })
            }, 1000)
        }
    }
