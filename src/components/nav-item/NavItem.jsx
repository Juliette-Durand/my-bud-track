import { NavLink } from 'react-router-dom';

export const NavItem = ({ icon, text, path }) => {
    return (
        <NavLink to={ path } >
            { icon }
            { text }
        </NavLink>
    );
}