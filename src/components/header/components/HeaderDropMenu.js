import React from "react";
import s from './HeaderDropMenu.module.scss';
import { NavLink} from "react-router-dom";

function HeaderDropMenu({menuList, openCloseMenu}) {
    return (
            <div className={s.container}>
            <div className={s.menu}>
                <input type="text" className={s.search} placeholder={"Search"}/>
                <ul>
                    {
                        menuList.map(({title, link}) => {
                            return (

                                <li key={link} className={s.liItem} onClick={openCloseMenu}>
                                    <NavLink to={link} className={s.link}>{title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>


            </div>

        </div>

    )



}

export default HeaderDropMenu;