import axios from 'axios'
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_ADD_BOOKMARK_REQUEST,
    USER_ADD_BOOKMARK_SUCCESS,
    USER_ADD_BOOKMARK_FAIL
} from '../constants/userConstant'

// REGISTER
export const register = (registerData) => async (dispatch) => {
    console.log('osman register', registerData)
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`,
            {
                user_name: registerData.firstName,
                user_surname: registerData.lastName,
                user_email: registerData.email,
                user_password: registerData.password,
                user_phonenumber: registerData.phoneNumber
            },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: 'Register failed'
        })
    }
}

// LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/login', { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: 'Login failed'
        })
    }
}

//LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}
