import classes from './AccountItem.module.css';
import { useNavigate } from 'react-router-dom';
import { useFormatMoney } from '../../hooks/useFormatMoney.js';

export const AccountItem = ({ label, category, balance }) => {

    const { formatMoney } = useFormatMoney();

    const navigate = useNavigate();

    const onClickHandler = (e) => {
        e.preventDefault();
        navigate('/accounts/1');
    }

    return (
        <a className={ classes["account_item"] } onClick={ onClickHandler }>
            <div className={ classes["account_icon"] }></div>
            <div className={ classes["account_content"] }>
                <h3>{ label }</h3>
                <span className={ classes["account_category"] }>{ category }</span>
                <span className={ classes["account_balance"] }>{ formatMoney(balance) } €</span>
            </div>
        </a>
    );
}