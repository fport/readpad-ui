import axios from '@utils/axios'
import {
    COMMENT_CREATE_REQUEST,
    COMMENT_CREATE_SUCCESS,
    COMMENT_CREATE_FAIL
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
