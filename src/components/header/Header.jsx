import logo from '../../assets/img/logo_mybudtrack_bgdark_h.svg';
import { HomeIcon } from '../../icons/HomeIcon.jsx';

import classes from './Header.module.css';

import { NavHeader } from "../nav-header/NavHeader.jsx";
import { NavItem } from "../nav-item/NavItem.jsx";

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context.jsx";

export const Header = () => {

    // Récupère la méthode de déconnexion de AuthContext
    const { logout } = useContext(AuthContext);

    // Déconnexion au clic sur le bouton
    const clickDisconnectHandler = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <header id="head_nav" className={ classes['head_nav'] }>
            <div className={ classes['logo_container'] }>
                <img src={ logo } alt=""></img>
            </div>
            <NavHeader />
            <div className={ classes['disconnect_btn'] } >
                <NavItem icon={ <HomeIcon /> } text="Déconnexion" path="" onClickEvent={ clickDisconnectHandler } />
            </div>
        </header>
    );
}