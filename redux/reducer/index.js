import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { runtimeReducer } from './runtimeReducer'
import { blogReducer } from './blogReducer'

export default combineReducers({
    userInfo: userReducer,
    blogInfo: blogReducer,
    runtime: runtimeReducer
})
