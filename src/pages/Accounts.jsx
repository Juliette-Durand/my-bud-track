import classes from './Accounts.module.css';

import { PageStructure } from '../components/page-structure/PageStructure.jsx';
import { HeadAndContent } from '../components/head-and-content/HeadAndContent.jsx';
import { Button } from '../components/button/Button.jsx';
import { ItemList } from '../components/item-list/ItemList.jsx';
import { AccountItem } from '../components/account-item/AccountItem.jsx';

export const Accounts = () => {
    return (
        <PageStructure title="Comptes" >
            <HeadAndContent title="Tous mes comptes" styleClass={ classes['accounts'] }>
                <Button type='navigation' text="Ajouter un compte" link="accounts/create" />
                <ItemList>                    
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
                </ItemList>
            </HeadAndContent>
            <HeadAndContent title="Vue d'ensemble" styleClass={ classes['overview'] }>

            </HeadAndContent>
        </PageStructure>
    )
}