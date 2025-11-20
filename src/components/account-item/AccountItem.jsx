import classes from './AccountItem.module.css';

export const AccountItem = ({ label, category, balance }) => {
    return (
        <a class={ classes["account_item"] }>
            <div class={ classes["account_icon"] }></div>
            <div class={ classes["account_content"] }>
                <h3>{ label }</h3>
                <span class={ classes["account_category"] }>{ category }</span>
                <span class={ classes["account_balance"] }>{ balance } €</span>
            </div>
        </a>
    );
}