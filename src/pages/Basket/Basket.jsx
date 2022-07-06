import React from 'react'
import {NavLink} from 'react-router-dom'
import q from '../../img/smilik.svg'
import w from '../../img/strelka.svg'
import style from './Basket.module.scss'
const Basket = () => {
  return (
    <div className={style.Basket}>
      <div>
        <img src={q} alt="" />
      </div>
      <div>
        <h1>У вас нет заказов</h1>
        <div>
        <p>Вы нищеброд?<br />
           Оформите хотя бы один заказ.</p>
        </div>
      </div>
      <div className={style.btn}>
        <NavLink to={'/'}>
        <button>
           <img src={w} alt="" /> Вернуться назад
        </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Basket