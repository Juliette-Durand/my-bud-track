import classes from './Button.module.css';
import { useNavigate } from "react-router";

export const Button = ({ type = "button", text = "", style = "primary", link = "", onClick, moreClasses="", disabled = false }) => {

    const navigate = useNavigate();
    
    const onClickHandler = () => {
        if (type === "navigation" && link !== "") {
            navigate(link);
        } else {
            onClick();
        }
    }
    
    if (type === "submit") {
        return (
            <input type={ type } value={ text } className={`${classes.btn} ${classes[`btn-${style}`]} ${moreClasses}`} disabled={ disabled } ></input>
        );
    } else {
        return (
            <button onClick={ onClickHandler } className={`${classes.btn} ${classes[`btn-${style}`]}`} disabled={ disabled } >{ text }</button>
        );
    }
}