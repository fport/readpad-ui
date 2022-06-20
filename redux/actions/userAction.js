import axios from '@utils/axios'
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from '../constants/userConstant'
import { TOAST_ACTION_SUCCESS, TOAST_ACTION_CLEAR } from '../constants/runtimeConstant'
import cookiesUtils from '@utils/cookies'
import Router from 'next/router'

// REGISTER
export const register = (registerData) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const mappedData = {
            user_name: registerData.firstName,
            user_surname: registerData.lastName,
            user_email: registerData.email,
            user_password: registerData.password,
            user_phonenumber: registerData.phoneNumber
        }

        const res = await axios('user', { method: 'POST', data: { ...mappedData } }).then(
            (response) => {
                dispatch({
                    type: USER_REGISTER_SUCCESS,
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
        console.error('osman error', error)
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: 'Register failed'
        })
        dispatch({
            type: TOAST_ACTION_SUCCESS,
            payload: 'Register failed'
        })
        setTimeout(() => {
            dispatch({
                type: TOAST_ACTION_CLEAR
            })
        }, 1000)
    }
}

// LOGIN
export const login = (loginData) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const mappedData = {
            user_email: loginData.email,
            user_password: loginData.password
        }

        await axios('user/login', {
            method: 'POST',
            data: { ...mappedData }
        }).then((response) => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: {
                    isAuth: response?.data?.isAuth,
                    isLoggedIn: response?.data?.isLoggedIn,
                    loginTime: response?.data?.loginTime,
                    email: response?.data?.userEmail,
                    name: response?.data?.userNameuserSurname,
                    id: response?.data?.user_id
                }
            })

            dispatch({
                type: TOAST_ACTION_SUCCESS,
                payload: response?.data?.token && 'Login success'
            })
            setTimeout(() => {
                dispatch({
                    type: TOAST_ACTION_CLEAR
                })
            }, 1000)

            cookiesUtils.setAuthorisedUser(response?.data?.token)

            const removedTokenData = response?.data
            delete removedTokenData?.token
            localStorage.setItem('userInfo', JSON.stringify(removedTokenData))

            Router.push('/')
        })
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error?.message
        })
        dispatch({
            type: TOAST_ACTION_SUCCESS,
            payload: error?.message
        })
        setTimeout(() => {
            dispatch({
                type: TOAST_ACTION_CLEAR
            })
        }, 1000)
    }
}

//LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    cookiesUtils.logout()
    dispatch({ type: USER_LOGOUT })
}
