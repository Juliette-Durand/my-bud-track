import logo from '../../assets/img/logo_mybudtrack_bgdark_h.svg';
import classes from './Header.module.css';
import { NavHeader } from "../nav-header/NavHeader.jsx";

export const Header = () => {
    return (
        <header id="head_nav" className={ classes['head_nav'] }>
            <div className={ classes['logo_container'] }>
                <img src={ logo } alt=""></img>
            </div>
            <NavHeader />
        </header>
    );
}