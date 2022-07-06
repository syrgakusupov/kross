import React from 'react'
import style from './header.module.scss'
import logo from './../../img/logo 86.svg'
import icon from '../../img/iconca.svg'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className={style.phonts}>
          <NavLink to='/'>
              <img src={logo} alt="" />
          </NavLink>
        <div className={style.icon}>
          <NavLink to='Basket'>
              <img src={icon} alt="" />
          </NavLink>
          
          <div className={style.som}>
            <span className={style.span}> 1200</span>
            <p>Сом.</p>
          </div>
        </div>
      </div>
            <hr/>
        </div>
    
  )
}
export default Header
