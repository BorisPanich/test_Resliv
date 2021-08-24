import React from 'react'
import { Redirect, Route, Switch} from 'react-router-dom'
import {MainContainer} from "../Main/MainContainer";
import {Error404Container} from "../Error404/Error404Container";
import {EmployeesContainer} from "../Employees/EmployeesContainer";


export const PATH = {
  MAIN: '/main',
  EMPLOYEES: '/employees'
}

function Routes() {
  return (
    <div>
      <Switch>
        <Route path = '/' exact render = { () => <Redirect to = {PATH.MAIN}/>} />
        <Route path = {PATH.MAIN} render = { () => <MainContainer />} />
        <Route path = {PATH.EMPLOYEES} render={ () => <EmployeesContainer />} />
        <Route path = {'/404'} render={ () => <Error404Container />} />
        <Redirect path = {'*'} to={'/404'}/>
      </Switch>
    </div>
  )
}

export default  Routes