import classes from './AccountList.module.css';
import { AccountItem } from '../account-item/AccountItem.jsx';

export const AccountList = () => {
    return (
        <div class={ classes["accounts_list"] }>
            <AccountItem label="Compte principal" category="Compte courant" balance="650.00" />
            <AccountItem label="Livret A" category="Livret A" balance="11000.00" />
            <AccountItem label="Livret Jeune" category="Livret Jeune" balance="1600.00" />
            <AccountItem label="Compte principal" category="Compte courant" balance="650.00" />
            <AccountItem label="Livret A" category="Livret A" balance="11000.00" />
            <AccountItem label="Livret Jeune" category="Livret Jeune" balance="1600.00" />
            <AccountItem label="Compte principal" category="Compte courant" balance="650.00" />
            <AccountItem label="Livret A" category="Livret A" balance="11000.00" />
            <AccountItem label="Livret Jeune" category="Livret Jeune" balance="1600.00" />
            <AccountItem label="Compte principal" category="Compte courant" balance="650.00" />
            <AccountItem label="Livret A" category="Livret A" balance="11000.00" />
            <AccountItem label="Livret Jeune" category="Livret Jeune" balance="1600.00" />
        </div>
    );
}