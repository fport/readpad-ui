import '@s/globals.css'
import { wrapper, store } from '../redux/store'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()
import axios from '@utils/axios'

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
    const runtimeData = useSelector((state) => state.runtime)
    const { loading, message } = runtimeData

    useEffect(() => {
        if (message && loading) {
            toast(message)
        }
    }, [runtimeData])

    useEffect(() => {
        const token = cookies.get('AUTH_TOKEN')
        if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
        }
    }, [])

    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            <ToastContainer theme="dark" />
        </>
    )
}

export default wrapper.withRedux(MyApp)
