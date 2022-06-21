import { Cookies } from 'react-cookie'
import axios from '@utils/axios'
const cookies = new Cookies()

const AUTH_TOKEN = 'AUTH_TOKEN'

const cookiesUtils = (function () {
    let setCookie = (key, value) => {
        cookies.set(key, value, { path: '/' })
    }

    let getCookie = (key) => {
        const getCookie = cookies.get(key)

        return getCookie
    }

    let removeCookie = (key) => {
        return cookies.remove(key)
    }

    return {
        setAuthorisedUser: function (token) {
            setCookie(AUTH_TOKEN, token)
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
        },

        getAuthorisedUser: function () {
            return getCookie(AUTH_TOKEN)
        },

        logout: function () {
            removeCookie(AUTH_TOKEN)
            axios.defaults.headers.common.Authorization = ``
        }
    }
})()

export default cookiesUtils
