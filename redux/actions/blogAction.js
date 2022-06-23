import axios from '@utils/axios'
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
import { TOAST_ACTION_SUCCESS, TOAST_ACTION_CLEAR } from '../constants/runtimeConstant'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

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

// GET BLOGS BY USER ID
export const getUserBlogs =
    ({ id }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: GET_USER_BLOGS_REQUEST
            })

            // const token = cookies.get('AUTH_TOKEN')
            // if (token) {
            //     axios.defaults.headers.common.Authorization = `Bearer ${token}`
            // }

            const res = await axios(`blog/${id}`, { method: 'GET' }).then((response) => {
                dispatch({
                    type: GET_USER_BLOGS_SUCCESS,
                    payload: {
                        isSuccesful: response?.data?.massage && true,
                        data: response?.data?.data
                    }
                })

                localStorage.setItem('blogInfo', JSON.stringify(response?.data?.data))

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
                type: GET_USER_BLOGS_FAIL,
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

// GET ALL BLOGS
export const getAllBlogs = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_BLOGS_REQUEST
        })

        const res = await axios(`blog/all`, { method: 'GET' }).then((response) => {
            dispatch({
                type: GET_ALL_BLOGS_SUCCESS,
                payload: {
                    isSuccesful: response?.data?.massage && true,
                    data: response?.data?.data
                }
            })

            localStorage.setItem('blogList', JSON.stringify(response?.data?.data))
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_BLOGS_FAIL,
            payload: 'Bloglar yuklenirken bir sorun ile karsilasildi'
        })
    }
}
