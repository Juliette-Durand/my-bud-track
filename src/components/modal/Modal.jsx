import classes from './Modal.module.css';

import { Button } from '../button/Button';

export const Modal = ({ title, btnText, btnStyle, activated = false, onClickBtn, children, onCancel }) => {

    const clickHandler = (e) => {
        if ( (e.target.classList.contains(classes['modal-container']))
        && (!e.target.closest(`div.${classes['modal-box']}`))  ) {
            onCancel && onCancel();
        }
    };

    return (
        <div className={ `${ classes['modal-container'] } ${ activated ? classes.active : "" }` } onClick={ clickHandler }>
            <div className={ classes['modal-box'] } >
                <div className={ `${classes['modal-header']} mb-small` } >
                    <span>{ title }</span>
                </div>
                <div className={ `${classes['modal-body']} mb-grand` } >
                    { children }
                </div>
                <div className={ classes['modal-footer'] } >
                    <Button text="Annuler" onClick={ onCancel } />
                    <Button text={ btnText } onClick={ onClickBtn } style={ btnStyle } />
                </div>
            </div>
        </div>
    );
}