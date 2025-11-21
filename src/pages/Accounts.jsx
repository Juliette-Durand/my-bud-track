import classes from './Accounts.module.css';
import { PageStructure } from '../components/page-structure/PageStructure.jsx';
import { HeadAndContent } from '../components/head-and-content/HeadAndContent.jsx';
import { Button } from '../components/button/Button.jsx';
import { AccountList } from '../components/account-list/AccountList.jsx';

export const Accounts = () => {
    return (
        <PageStructure title="Comptes" >
            <HeadAndContent title="Tous mes comptes" styleClass={ classes['accounts'] }>
                <Button type='navigation' text="Ajouter un compte" link="accounts/create" />
                <AccountList />
            </HeadAndContent>
            <HeadAndContent title="Vue d'ensemble" styleClass={ classes['overview'] }>

            </HeadAndContent>
        </PageStructure>
    )
}