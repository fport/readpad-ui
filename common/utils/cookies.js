import { Cookies } from 'react-cookie'
import axios from '@utils/axios'
const cookies = new Cookies()

const AUTH_USER = 'auth-user'

const cookiesUtils = (function () {
    let setCookie = (key, value) => {
        cookies.set(key, value, { path: '/' })
    }

    let getCookie = (key) => {
        return cookies.get(key)
    }

    let removeCookie = (key) => {
        return cookies.remove(key)
    }

    return {
        setAuthorisedUser: function (token) {
            setCookie('AUTH_TOKEN', token)
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
        },

        getAuthorisedUser: function () {
            getCookie('AUTH_TOKEN')
        },

        logout: function () {
            removeCookie('AUTH_TOKEN')
            axios.defaults.headers.common.Authorization = ``
        }
    }
})()

export default cookiesUtils
