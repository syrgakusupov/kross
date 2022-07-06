import React, { useState } from 'react'
import Content from '../../components/content/Content'
import Search from '../../components/Search/Search'
import Snackbar from '../../components/snackbar/snackbar'
import style from './HomePage.module.scss'
const HomePage = ({ bd }) => {
  const [value, setValue] = useState('')
  const allData = bd.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
  return (
    <div>
      <Content />
      <Search setValue={setValue} value={value} />

      <div className={style.crossfit}>
        {allData.map(item => (
          <Snackbar item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default HomePage