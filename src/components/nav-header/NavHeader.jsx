import { NavItem } from "../nav-item/NavItem.jsx";

import { HomeIcon } from '../../icons/HomeIcon.jsx';
import { AccountIcon } from '../../icons/AccountIcon.jsx';
import { HouseholdIcon } from '../../icons/HouseholdIcon.jsx';
import { TransactionIcon } from '../../icons/TransactionIcon.jsx';

export const NavHeader = () => {
    return (
        <nav>
            <ul>
                <li><NavItem icon={ <AccountIcon /> } text="Comptes" path="/" /></li>
                <li><NavItem icon={ <TransactionIcon /> } text="Transactions" path="/transactions" /></li>
                <li><NavItem icon={ <HomeIcon /> } text="Administration" path="/me" /></li>
                <li><NavItem icon={ <HomeIcon /> } text="Profil" path="/admin" /></li>
            </ul>
        </nav>
    );
}