import axios from '@utils/axios'
import { BLOG_CREATE_REQUEST, BLOG_CREATE_SUCCESS, BLOG_CREATE_FAIL } from '../constants/blogAction'
import { TOAST_ACTION_SUCCESS, TOAST_ACTION_CLEAR } from '../constants/runtimeConstant'

// BLOG CREATE
export const create = (createData) => async (dispatch) => {
    try {
        dispatch({
            type: BLOG_CREATE_REQUEST
        })

        const mappedData = {
            blog_author: createData.author,
            blog_title: createData.title,
            blog_summary: createData.summary,
            blog_content: createData.content,
            user_user_id: createData.id
        }

        const res = await axios('blog', { method: 'POST', data: { ...mappedData } }).then(
            (response) => {
                dispatch({
                    type: BLOG_CREATE_SUCCESS,
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
            type: BLOG_CREATE_FAIL,
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
