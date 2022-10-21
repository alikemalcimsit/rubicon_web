import React from 'react'
import NavBar from '../../components/NavBar'
import araba from '../../assets/car.png'
import style from './HomePage.module.scss'
function HomePage() {
  return (
    <div>
        <div className={style.navbar}><NavBar/></div>
        <div className={style.content}>
          <div className={style.araba}>
            <img className={style.resim} src={araba}></img>
          </div>
          <div className={style.yazı}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p>
          </div>
        </div>
    </div>
  )
}

export default HomePage