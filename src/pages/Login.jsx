import classes from './Login.module.css';

import { useNavigate } from "react-router";
import { useContext, useState } from "react";

import { AuthContext } from "../contexts/auth-context.jsx";

import { FormInput } from '../components/form-input/FormInput';
import { Button } from '../components/button/Button';
import { ErrorItem } from '../components/error/ErrorItem.jsx';

import useFetch from '../hooks/useFetch.js';

export const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const { request } = useFetch(
        `${import.meta.env.VITE_API_URL}/auth/login`
    );

    // Définition des states
    const [email, setEmail] = useState("");
    const changeEmailValue = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (value.trim() !== "") clearError('email');
    }
    const [password, setPassword] = useState("");
    const changePasswordValue = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (value.trim() !== "") clearError('password');
    }

    // Définition des erreurs front
    const [errors, setErrors] = useState({});
    // Nettoyage d'une erreur
    const clearError = (field) => {
        setErrors(prev => {
            if (!prev[field]) return prev;
            const copy = { ...prev };
            delete copy[field];
            return copy;
        });
    };
    // Définition de l'erreur API
    const [apiError, setApiError] = useState(null);

    // Soumission du formulaire
    const submitHandler = async (e) => {
        e.preventDefault();
        setApiError(null);

        const newErrors = {};

        if (email.trim() === "") newErrors.email = "L'adresse email est obligatoire";
        if (password.trim() === "") newErrors.password = "Le mot de passe est obligatoire";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Construction des données
        const user = {
            email, password
        }
        // Construction des options
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }

        const res = await request(options);
        

        // Réponse de l'API
        if (res.succeed) {
            login(res.data.accessToken, res.data.refreshToken);
        } else {
            setApiError(res.error?.message || "Une erreur est survenue");
            console.log(`API Error : ${apiError}`);
        }
    };

    // Navigation
    const onClickHandler = (e) => {
        e.preventDefault();
        navigate('/signup');
    }
    const onClickForgPwdHandler = (e) => {
        e.preventDefault();
        navigate('/signup');
    }

    return (
        <div className={`${classes['login_container']}`}>
            <h1 className={`mb-small`}>Se connecter</h1>
            <form action="" method="POST" id="login_form" onSubmit={submitHandler} >
                {( Object.keys(errors).length > 0 || apiError) && (
                    <ErrorItem>
                        { Object.entries(errors).map(([field, message]) => (
                            <p key={field}>{message}</p>
                        ))}
                        {apiError && <p>{apiError}</p>}
                    </ErrorItem>
                )}
                <FormInput type="email" name="email" label="Adresse email" placeholder="exemple@email.com" containerClasses={['mb-small']} value={ email } onChange={ changeEmailValue } isInvalid={errors.email ? true : false} />

                <FormInput type="password" name="password" label="Mot de passe" containerClasses={'mb-grand'} value={ password } onChange={ changePasswordValue } isInvalid={errors.password ? true : false} />

                <Button type="submit" text="Connexion" style="primary" moreClasses="mb-small" />
                <p>Pas encore inscrit ?<br className={`hidden-tablet hidden-desktop`}></br> <a href="" onClick={onClickHandler} >Créer mon compte</a></p>
                <a href="" onClick={onClickForgPwdHandler} >Mot de passe oublié</a>
            </form>
        </div>
    )
}