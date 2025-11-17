import classes from './Login.module.css';
import { FormInput } from '../components/form-input/FormInput';
import { Button } from '../components/button/Button';
import { useNavigate } from "react-router";

export const Login = () => {

    const navigate = useNavigate();

    const onClickHandler = (e) => {
        e.preventDefault();
        navigate('/signup');
    }
    const onClickForgPwdHandler = (e) => {
        e.preventDefault();
        navigate('/signup');
    }
    return (
        <div className={ `${classes['login_container']}` }>
            <h1 className={ `mb-small` }>Se connecter</h1>
            <form action="" method="POST" id="login_form">
                <FormInput type="email" name="email" label="Adresse email" placeholder="exemple@email.com" containerClasses={ ['mb-small'] } />

                <FormInput type="password" name="password" label="Mot de passe" containerClasses={ 'mb-grand' } />

                <Button type="submit" text="Connexion" style="primary" moreClasses="mb-small" />
                <p>Pas encore inscrit ?<br className={ `hidden-tablet hidden-desktop` }></br> <a href="" onClick={ onClickHandler } >Créer mon compte</a></p>
                <a href="" onClick={ onClickForgPwdHandler } >Mot de passe oublié</a>
            </form>
        </div>
    )
}