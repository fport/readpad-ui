import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { runtimeReducer } from './runtimeReducer'

export default combineReducers({
    userInfo: userReducer,
    runtime: runtimeReducer
})
