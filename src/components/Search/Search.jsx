import React from 'react'
import style from './search.module.scss'
import search from '../../img/search.svg'
const Block = ({ setValue, value }) => {
  return (
    <div className={style.h1search}>
      <div>
        <h1>Все кроссовки</h1>
      </div>
      <div>
        <img src={search} alt="" className={style.ser} />
        <input
          type="text"
          placeholder='ПОИСК...'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Block