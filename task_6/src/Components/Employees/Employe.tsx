import React from 'react'
import s from './Employees.module.sass'
import {UserType} from "../../Types/Types"

type EmployeType = UserType & {
  removeUser: (id: number) => void
}

export const Employe = React.memo(( props: EmployeType) => {
    return  <div className={s.employeesOverlay}>
      <fieldset className={s.user}>
        <legend> {props.first_name} {props.last_name}</legend>
        <img src = {props.avatar} alt=""/>
        <p>email: {props.email}</p>
        <button onClick = { () => props.removeUser(props.id) }>delete</button>
      </fieldset>
    </div>
  }
)