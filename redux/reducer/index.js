import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { runtimeReducer } from './runtimeReducer'
import { blogReducer } from './blogReducer'
import { commentReducer } from './commentReducer'

export default combineReducers({
    userInfo: userReducer,
    blogInfo: blogReducer,
    runtime: runtimeReducer,
    comment: commentReducer
})
