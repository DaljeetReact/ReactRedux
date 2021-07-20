//the Rooter Reducer will combine all the Reducer into one Place 


import { combineReducers } from '@reduxjs/toolkit'
import CounterReducer from './reducers/TestReducer'

const RootReducer = combineReducers({
    counter: CounterReducer,
})

export default RootReducer