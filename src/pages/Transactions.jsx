import arrow from '../assets/img/arrow.svg';
import classes from "./Transactions.module.css";

import { PageStructure } from "../components/page-structure/PageStructure.jsx";
import { HeadAndContent } from "../components/head-and-content/HeadAndContent.jsx";
import { TransactionAccountSelect } from "../components/transaction-account-select/TransactionAccountSelect.jsx";
import { FormInput } from "../components/form-input/FormInput.jsx";
import { Button } from '../components/button/Button.jsx';

export const Transactions = () => {

    return (
        <PageStructure title="Transactions">
            <HeadAndContent title="Effectuer une transaction" styleClass={classes.create}>
                <form action="" className={classes.form}>

                    <FormInput type="text"
                        name="transaction_label"
                        label="Libellé de la transaction"
                        placeholder="Ex: Virement vacances, épargne"
                        containerClasses={ `${ classes.label } mb-grand` }
                    />

                    <div className={ `${ classes.accounts } mb-grand` } >
                        <TransactionAccountSelect />

                        <div className={ classes['amount-container'] } >
                            <FormInput type="number" name="transaction_amount" label="Montant de la transaction" placeholder="1234,00" containerClasses={ classes['amount'] }
                                otherAttributes={ {
                                    step: "0.01",
                                    min: "0",
                                } }
                            />
                            <img src={ arrow } alt="" />
                        </div>

                        <TransactionAccountSelect isDestAccount={ true } />
                    </div>

                    <Button type="submit" text="Enregistrer la transaction" />
                </form>
            </HeadAndContent>
        </PageStructure>
    );
};
