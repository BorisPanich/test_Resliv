import React from "react"
import {UserType} from "../../Types/Types"
import s from './Employees.module.sass'
import {Employe} from "./Employe"

type EmployeesType = {
  users: Array<UserType>
  addUser: () => void
  removeUser: (id: number) => void
}

export const Employees = (props: EmployeesType) => {
  return <div>
    <h4>Список сотрудников:</h4>
    <div className={s.usersWrapper}>
      { props.users.map( (u: UserType, key: number) => {  return <div key={key}>
                                                                    <Employe id = {u.id}
                                                                             first_name={u.first_name}
                                                                             last_name={u.last_name}
                                                                             email={u.email}
                                                                             avatar={u.avatar}
                                                                             removeUser = { props.removeUser} />
                                                                  </div> })}
    </div>
    <div className={s.addNewUserWrapper}>
      <button onClick={ props.addUser }>new employe</button>
    </div>
  </div>
}


