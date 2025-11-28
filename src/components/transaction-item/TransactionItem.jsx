import classes from './TransactionItem.module.css';

import { useFormatMoney } from '../../hooks/useFormatMoney';

export const TransactionItem = ({ label, isCredit = false, amount }) => {

    const { formatMoney } = useFormatMoney();

    return (
        <div className={ classes['trans_item'] }>
            <div className={ classes['trans_item_header'] }>
                <div className={ classes['trans_item_icon'] }></div>
                <span>{ label }</span>
            </div>
            <div className={ classes['trans_item_description'] }>
                <span className={ classes['trans_item_date'] }>01/01/2025</span>
                <span className={ `${classes['trans_item_amount']} ${classes[isCredit ? "credit" : "debit"]}` }>{ isCredit ? "+" : "-" }{ formatMoney(amount) } €</span>
            </div>
        </div>
    );
}