import image from '../assets/img/connexion_inscription.jpg';
import classes from './PublicLayout.module.css';
import { Outlet } from 'react-router-dom'

export const PublicLayout = () => {
    return (
        <main className={ classes.log }>
            <div className={ classes['log_container'] }>
                <div className={ `${classes['log_img']} mb-grand` }>
                    <img src={ image } alt=""></img>
                </div>
                <Outlet />
            </div>
        </main>
    );
}