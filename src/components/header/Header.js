import React from "react";
import s from './Header.module.scss';

import logo from '../../images/logo.png';
import HeaderDropMenu from "./components/HeaderDropMenu";

function Header({openCloseMenu, isOpen, menuList}) {


    const clazz = isOpen ?  `${s.btnDrover} ${s.active}` : s.btnDrover;
    return (

            <header className={s.container}>
                <div className={s.logo}>
                    <img src={logo} alt="logo" className={s.logoImage}/>
                    <h1 className={s.logoText}>LOGO</h1>
                </div>
                <div className={s.btnDroverWrapper} onClick={openCloseMenu}>
                    <div className={clazz } ></div>
                </div>
                {isOpen ? <HeaderDropMenu  menuList={menuList} openCloseMenu={openCloseMenu}/> : null}
            </header>

        )


}

export default Header;