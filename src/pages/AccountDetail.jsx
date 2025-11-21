import { PageStructure } from '../components/page-structure/PageStructure.jsx';
import { HeadAndContent } from '../components/head-and-content/HeadAndContent.jsx';
import { Button } from '../components/button/Button.jsx';

export const AccountDetail = () => {
    return (
        <PageStructure title="Libellé du compte" >
            <HeadAndContent title="Dernières transactions">
                <Button type="navigation" text="Nouvelle transaction" link="/transactions"/>
            </HeadAndContent>

            <HeadAndContent title="Détail de la transaction">
                
            </HeadAndContent>
            <HeadAndContent title="Vue d'ensemble">

            </HeadAndContent>
        </PageStructure>
    )
}