import classes from './FormSelect.module.css';

export const FormSelect = ({name, label, containerClasses = "", children }) => {

    return (
        <div className={ classes['form-select'] } >
            <label htmlFor={ name }>{ label }</label>
            <select name={ name } id={ name } className={ `${containerClasses}` } >
                { children }
            </select>
        </div>
    );
}