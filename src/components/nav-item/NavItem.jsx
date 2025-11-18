import { NavLink } from 'react-router-dom';

export const NavItem = ({ icon, text, path, onClickEvent }) => {
    return (
        <NavLink to={ path } onClick={ onClickEvent }>
            { icon }
            { text }
        </NavLink>
    );
}