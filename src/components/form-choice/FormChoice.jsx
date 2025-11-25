import classes from './FormChoice.module.css';

export const FormChoice = ({ type="checkbox", name, id, label, containerClasses = "", value, checked = false }) => {

    return (
        <div className={ `${ classes['form-choice'] } ${ containerClasses }` } >
            <input type={ type } name={ name } id={ id } value={ value } defaultChecked={ checked } />
            <label htmlFor={ id }>{ label }</label>
        </div>
    );
}