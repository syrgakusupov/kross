import React, { useState } from 'react'
import style from './snackbar.module.scss'
import  checimg from '../../img/check.svg'
import checedimg from '../../img/checkd.svg'
import setLikeimg from '../../img/like.svg'
import Likeimg from '../../img/setserdechka.svg'
const Snackbar = ({ item }) => {
  const [check, setchek] = useState(false)
  const [like, setLike] = useState(false)
  const [cart,setCart] = useState([])
  function handleclick() {
    setchek(!check)
    console.log(check);
  }
  function fol() {
    setLike(!like)
  }

  return (
    <div>

      <div className={style.sneck}>
        <div className={style.width}>
          <img className={style.serdechka}
            onClick={fol}
            src={like ? Likeimg : setLikeimg}
            alt="" />
          <img className={style.krosovki} src={item.kross} alt='' />
          <h5>{item.name}</h5>
          <p>{item.id}</p>
          <div className={style.setimg}>
            <h2>{item.price}</h2>
            <img
              className={style.check}
              onClick={handleclick}
              src={check ? checedimg : checimg }
              alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Snackbar