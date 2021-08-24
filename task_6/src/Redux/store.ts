import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {employeesReducer} from "./employeesReducer"

const rootReducer = combineReducers({
  employees: employeesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store