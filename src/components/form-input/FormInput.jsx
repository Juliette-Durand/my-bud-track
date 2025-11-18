import classes from './FormInput.module.css';

export const FormInput = ({ type, name, label, placeholder="", containerClasses = "", inputClasses = "" }) => {

    return (
        <div className={ `${classes['form-input']} ${ containerClasses }` }>
            <label htmlFor={ name }>{ label }</label>
            <input type={ type } name={ name } id={ name } placeholder={ placeholder } className={ `${ inputClasses }` } autoComplete="off"></input>
        </div>
    );
}