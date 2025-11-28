import { useState } from 'react';
import classes from './AccountDetail.module.css';
import { useFormatMoney } from '../hooks/useFormatMoney.js';

import { PageStructure } from '../components/page-structure/PageStructure.jsx';
import { HeadAndContent } from '../components/head-and-content/HeadAndContent.jsx';
import { Button } from '../components/button/Button.jsx';
import { Modal } from '../components/modal/Modal.jsx';
import { TransactionItem } from '../components/transaction-item/TransactionItem.jsx';
import { ItemList } from '../components/item-list/ItemList.jsx';

export const AccountDetail = () => {

    const { formatMoney } = useFormatMoney();

    const [ isActive, setIsActive ] = useState(false);
    const openModal = () => setIsActive(true); // Ouvre la modal
    const closeModal = () => setIsActive(false); // Ferme la modal

    const onClickHandler = (e) => {
        // Suppression du compte
    };

    return (
        <>
            <Modal activated={ isActive } title="Supprimer un compte" btnText="Confirmer la suppression" onCancel={ closeModal } onClickBtn={ onClickHandler } btnStyle='danger' >
                <p>Êtes vous certain(e) de vouloir supprimer ce compte ?</p>
                <p>Cette action est irréversible.</p>
            </Modal>
            
            <PageStructure title="Libellé du compte" >
                { /* Informations sur le compte */ }
                <HeadAndContent title="Vue d'ensemble" styleClass={ classes['overview'] }>
                    <div className={ classes['overview_content'] } >
                        <div>
                            <h4>Solde actuel</h4>
                            <p>{ formatMoney(1345.00) } €</p>
                        </div>
                        <div>
                            <h4>Type de compte</h4>
                            <p>Compte courant</p>
                        </div>
                        <div>
                            <h4>Propriétaire(s)</h4>
                            <p>Juliette Durand (Moi)</p>
                            <p>Sébastien Fuchs</p>
                        </div>
                    </div>
                    <Button type="navigation" text="Modifier le compte" link="/accounts/1/edit"/>
                    <Button text="Supprimer le compte" style="danger" onClick={ openModal } />
                </HeadAndContent>

                { /* Liste des transactions du mois en cours */ }
                <HeadAndContent title="Dernières transactions" styleClass={ classes['transactions'] }>
                    <Button type="navigation" text="Nouvelle transaction" link="/transactions"/>
                    <ItemList>            
                        <TransactionItem label="Regul Center Park" amount="123.02" />
                        <TransactionItem label="Salaire Novembre 3maGroup" amount="900" isCredit="true" />
                        <TransactionItem label="Lego Store" amount="45.99" />
                        <TransactionItem label="Regul Center Park" amount="123.02" />
                        <TransactionItem label="Salaire Novembre 3maGroup" amount="900" isCredit="true" />
                        <TransactionItem label="Lego Store" amount="45.99" />
                        <TransactionItem label="Regul Center Park" amount="123.02" />
                        <TransactionItem label="Salaire Novembre 3maGroup" amount="900" isCredit="true" />
                        <TransactionItem label="Lego Store" amount="45.99" />
                        <TransactionItem label="Regul Center Park" amount="123.02" />
                        <TransactionItem label="Salaire Novembre 3maGroup" amount="900" isCredit="true" />
                        <TransactionItem label="Lego Store" amount="45.99" />
                        <TransactionItem label="Regul Center Park" amount="123.02" />
                        <TransactionItem label="Salaire Novembre 3maGroup" amount="900" isCredit="true" />
                        <TransactionItem label="Lego Store" amount="45.99" />
                    </ItemList>
                </HeadAndContent>

                { /* Détail d'un transaction */ }
                {/* <HeadAndContent title="Détail de la transaction"  styleClass={ classes['detail'] }>
                    
                </HeadAndContent> */}

            </PageStructure>
        </>
    );
}