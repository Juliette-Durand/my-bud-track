import { Header } from '../components/header/Header';
import { Outlet } from 'react-router-dom'

import burgerOpen from '../assets/img/burger_icon_open.svg';
import burgerClose from '../assets/img/burger_icon_closed.svg';

import { useState } from "react";

export const PrivateLayout = () => {

    const [isOpen, setIsOpen] = useState(false);

    // Ouvre/ Ferme le menu de navigation
    const openCloseHandler = () => {
        setIsOpen((prev) => !prev);
    }
    
    return (
        <div id="global_container">
            <div id="nav_button" className={ isOpen ? "open" : "" } onClick={ openCloseHandler }>
                <img src={ isOpen ? burgerClose : burgerOpen } alt="" />
            </div>
            <Header isOpen={ isOpen } />
            <main id="content_container">
                <Outlet />
            </main>
        </div>
    );
}