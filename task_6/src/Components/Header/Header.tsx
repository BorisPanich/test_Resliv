import React from "react"
import {PATH} from "../Routes/Routes"
import s from './Header.module.sass'
import {NavLink} from "react-router-dom"

export const Header = () => {
  return (
    <nav className={s.navOverlay}>
      <div className={s.item}>
        <NavLink to = { PATH.MAIN} activeClassName = {s.activeLink}>Главная</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to = { PATH.EMPLOYEES} activeClassName = {s.activeLink}>Сотрудники</NavLink>
      </div>
    </nav>
  )
}