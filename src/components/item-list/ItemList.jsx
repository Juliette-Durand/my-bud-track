import classes from './ItemList.module.css';

export const ItemList = ({ children }) => {
    return (
        <div className={ classes["list"] }>
            { children }
        </div>
    );
}