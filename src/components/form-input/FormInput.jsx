import classes from './FormInput.module.css';

export const FormInput = ({ type, name, label, placeholder="", containerClasses = "", inputClasses = "", otherAttributes={} }) => {

    return (
        <div className={ `${classes['form-input']} ${ containerClasses }` }>
            <label htmlFor={ name }>{ label }</label>
            <input
                type={ type }
                name={ name }
                id={ name }
                placeholder={ placeholder }
                className={ `${ inputClasses }` }
                autoComplete="off"
                {...otherAttributes}
            ></input>
        </div>
    );
}