import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {RootStateType} from "../../Redux/store"
import {UserType} from "../../Types/Types"
import {addEmployTC, fetchEmployeesTC, removeEmployTC} from '../../Redux/employeesReducer'
import {Employees} from "./Employees";

export const EmployeesContainer = () => {
  const dispatch = useDispatch()

  const users = useSelector<RootStateType, Array<UserType>>(state => state.employees.users)

  useEffect(()=> {
    dispatch(fetchEmployeesTC())
  }, [dispatch])

  const addUser = (name: string = 'Aleksei') => {
    console.log('add user name: ', name)
    dispatch(addEmployTC(name))
  }
  const removeUser = (id: number) => {
    console.log('remove user id:', id)
    dispatch(removeEmployTC(id))
  }

  return <Employees users = {users}
                    addUser={addUser}
                    removeUser = {removeUser}/>
}