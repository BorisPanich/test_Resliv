import React from "react";
import s from './Error404.module.sass'

export const Error404: React.FC<any> = () => {
  return <div className={s.error404Overlay}>
    <h2>.....Page not found.....</h2>
  </div>
}
