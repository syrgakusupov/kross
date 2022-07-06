import React from 'react'
import con from '../../img/Group.svg'
import style from './content.module.scss'
const content = () => {
  return (
    <div>
        <div className={style.content}>
            <img src={con} alt="" />
        </div>
    </div>
  )
}

export default content