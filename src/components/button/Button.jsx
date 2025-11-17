import classes from './Button.module.css';
import { useNavigate } from "react-router";

export const Button = ({ type = "button", text = "", style = "primary", link = "", onClick, moreClasses="" }) => {

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
            <input type={ type } value={ text } className={`${classes.btn} ${classes[`btn-${style}`]} ${moreClasses}`} ></input>
        );
    } else {
        return (
            <button onClick={ onClickHandler } className={`${classes.btn} ${classes[`btn-${style}`]}`} >{ text }</button>
        );
    }
}