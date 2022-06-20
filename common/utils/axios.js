import axios from 'axios'

const defaultRequest = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/`
})

export default defaultRequest
