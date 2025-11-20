import classes from './Accounts.module.css';
import { HeadAndContent } from '../components/head-and-content/HeadAndContent.jsx';
import { PageStructure } from '../components/page-structure/PageStructure.jsx';
import { AccountList } from '../components/account-list/AccountList.jsx';

export const Accounts = () => {
    return (
        <PageStructure title="Comptes" >
            <HeadAndContent title="Tous mes comptes" styleClass={ classes['accounts'] }>
                <AccountList />
            </HeadAndContent>
        </PageStructure>
    )
}