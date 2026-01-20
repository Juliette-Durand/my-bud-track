import classes from './FormInput.module.css';

export const FormInput = ({ type, name, label, placeholder = "", containerClasses = "", inputClasses = "", otherAttributes = {}, isInvalid = false, value, onChange }) => {
    return (
        <div className={`${classes['form-input']} ${containerClasses}`}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                {...otherAttributes}
                value={value ?? ""}     // important: input contrôlé
                onChange={onChange}     // important: ton handler est appelé
                className={`${inputClasses} ${isInvalid ? classes.invalid : ""}`}
                autoComplete="off"
            />
        </div>
    );
};
