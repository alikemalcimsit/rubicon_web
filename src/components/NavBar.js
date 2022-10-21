import React from 'react'
import logo from '../assets/logo.png'
import style from './navbar/Navbar.module.scss'
import { AiOutlineMenu} from "react-icons/ai";
function NavBar() {
    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <img className={style.resim} src={logo} ></img>
            </div>
            <div className={style.navbaritems}>
            <a className={style.icon}> <h2> <AiOutlineMenu/></h2> </a>
                
                <ul>

                    <li><h4>Anasayfa</h4></li>
                    <li><h4>Hakkımızda</h4></li>
                    <li><h4>Ürünler</h4></li>
                    <li><h4>Üyelerimiz</h4></li>
                    <li><h4>Alora</h4></li>

                </ul>

                
            </div>
        </div>
    )
}

export default NavBar