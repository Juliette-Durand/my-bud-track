import classes from './ErrorItem.module.css';

export const ErrorItem = ({ children }) => {

    return (
        <div className={ `${ classes.error }` } >
            { children }
        </div>
    );
}