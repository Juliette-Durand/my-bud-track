import { useState } from 'react';

import { PageStructure } from '../components/page-structure/PageStructure.jsx';
import { HeadAndContent } from '../components/head-and-content/HeadAndContent.jsx';
import { Button } from '../components/button/Button.jsx';
import { Modal } from '../components/modal/Modal.jsx';

export const AccountDetail = () => {

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
                <HeadAndContent title="Dernières transactions">
                    <Button type="navigation" text="Nouvelle transaction" link="/transactions"/>
                </HeadAndContent>

                <HeadAndContent title="Détail de la transaction">
                    
                </HeadAndContent>

                <HeadAndContent title="Vue d'ensemble">
                    <Button type="navigation" text="Modifier le compte" link="/accounts/1/edit"/>
                    <Button text="Supprimer le compte" style="danger" onClick={ openModal } />
                </HeadAndContent>
            </PageStructure>
        </>
    );
}