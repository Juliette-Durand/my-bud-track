import { PageStructure } from '../components/page-structure/PageStructure.jsx';
import { HeadAndContent } from '../components/head-and-content/HeadAndContent.jsx';
import { Button } from '../components/button/Button.jsx';
import { FormInput } from '../components/form-input/FormInput.jsx';
import { FormSelect } from '../components/form-select/FormSelect.jsx';
import { FormSelectOption } from '../components/form-select-option/FormSelectOption.jsx';
import { FormChoice } from '../components/form-choice/FormChoice.jsx';

import { useNavigate } from 'react-router-dom';

export const AccountCreate = () => {

    const data = [
        {
            id: 1,
            label: "Compte courant"
        },
        {
            id: 2,
            label: "Livret A"
        },
        {
            id: 3,
            label: "Livret Jeune"
        }
    ]

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const accountLists = data.map(account => {
        return(
            <FormSelectOption key={ account.id } value={ account.id } text={ account.label }/>
        );
    });

    return (
        <PageStructure title="Comptes" >
            <HeadAndContent title="Ajouter un compte">
                <form action="" method="post" onSubmit={ submitHandler }>
                    <FormInput
                        type="text"
                        name="account_label"
                        label="Libellé du compte"
                        placeholder="Compte principal"
                        containerClasses={ 'mb-small' }
                    />
                    <FormInput
                        type="number"
                        name="account_label"
                        label="Solde initial"
                        placeholder="1234,00"
                        containerClasses={ 'mb-small' }
                        otherAttributes={ {
                            step: "0.01",
                            min: "0",
                        } }
                    />
                    <FormChoice
                        type="radio"
                        name="privacy_account"
                        id="privacy_account_private"
                        value="private"
                        label="Compte personnel"
                        containerClasses={ 'mb-small' }
                        checked={ true }
                    />
                    <FormChoice
                        type="radio"
                        name="privacy_account"
                        id="privacy_account_public"
                        value="public"
                        label="Compte public"
                        containerClasses={ 'mb-small' }
                    />

                    <FormSelect name="select2" label="Type de compte" containerClasses="mb-grand" >
                        { accountLists }
                    </FormSelect>
                    
                    <Button type="submit" text="Enregistrer le compte" />
                </form>
            </HeadAndContent>
        </PageStructure>
    )
}