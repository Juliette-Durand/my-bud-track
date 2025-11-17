import classes from './Signup.module.css'
import { FormInput } from '../components/form-input/FormInput';
import { Button } from '../components/button/Button';
import { useNavigate } from "react-router";

export const Signup = () => {

    const navigate = useNavigate();

    const onClickHandler = (e) => {
        e.preventDefault();
        navigate('/login');
    }
    return(
        <div className={ classes['signup_container'] } >
            <h1 className="mb-small">S'inscrire</h1>
            <form action="" method="post" id="signup_form">
                <div className={ classes['form_name_container'] }>
                    <FormInput type="text" name="firstname" label="Prénom" placeholder="John" containerClasses={ ['mb-small'] } />
                    <FormInput type="text" name="lastname" label="Nom" placeholder="Doe" containerClasses={ ['mb-small'] } />
                </div>
                <FormInput type="email" name="email" label="Adresse email" placeholder="exemple@email.com" containerClasses={ ['mb-small'] } />
                <FormInput type="password" name="password" label="Mot de passe" containerClasses={ ['mb-small'] } />
                <FormInput type="password" name="conf_password" label="Confirmation du mot de passe" containerClasses={ ['mb-grand'] } />

                <Button type="submit" text="Inscription" style="primary" moreClasses="mb-small" />
                <p>Déjà inscrit ?<br className="hidden-tablet hidden-desktop"></br> <a href="" onClick={ onClickHandler } >Me connecter</a></p>
            </form>
        </div>
    );
}