import classes from './Signup.module.css'
import { FormInput } from '../components/form-input/FormInput';
import { Button } from '../components/button/Button';
import { useNavigate } from "react-router";
import { useState } from 'react';
import useFetch from '../hooks/useFetch';

const URL_API = import.meta.env.VITE_API_URL;
const endpoint = 'auth/register/'

export const Signup = () => {

    const navigate = useNavigate();
    const { loading, request } = useFetch(`${URL_API}${endpoint}`);

    // Définition des states
    const [firstname, setFirstname] = useState("");
    const changeFirstnameValue = (e) => {
        const value = e.target.value;
        setFirstname(value);
        if (value.trim() !== "") clearError('firstname');
    }
    const [lastname, setLastname] = useState("");
    const changeLastnameValue = (e) => {
        const value = e.target.value;
        setLastname(value);
        if (value.trim() !== "") clearError('lastname');
    }
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
    const [confPassword, setConfPassword] = useState("");
    const changeConfPasswordValue = (e) => {
        const value = e.target.value;
        setConfPassword(value);
        if (value.trim() !== "") clearError('conf_password');
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

        if (firstname.trim() === "") newErrors.firstname = "Le prénom est obligatoire";
        if (lastname.trim() === "") newErrors.lastname = "Le nom est obligatoire";
        if (email.trim() === "") newErrors.email = "L'adresse email est obligatoire";
        if (password.trim() === "") newErrors.password = "Le mot de passe est obligatoire";
        if (confPassword.trim() === "") newErrors.conf_password = "La confirmation de mot de passe est obligatoire";

        // Correspondance des mots de passe
        if (password.trim() !== "" && confPassword.trim() !== "" && password !== confPassword) {
            newErrors.conf_password = "Les mots de passe ne correspondent pas";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Construction des données
        const user = {
            firstname, lastname, email, password
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
        console.log(`res : `);
        console.log(res);
        

        // Réponse de l'API
        if (res.succeed) {
            navigate("/login");
        } else {
            setApiError(res.error?.message || "Une erreur est survenue");
            console.log(`API Error : ${apiError}`);
        }
    };


    const onClickHandler = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    return (
        <div className={classes['signup_container']} >
            <h1 className="mb-small">S'inscrire</h1>
            <form action="" method="post" id="signup_form" onSubmit={submitHandler}>
                <div className={classes['form_name_container']}>
                    <FormInput type="text" name="firstname" label="Prénom" placeholder="John" containerClasses={['mb-small']} value={firstname} onChange={changeFirstnameValue} isInvalid={errors.firstname ? true : false} />
                    <FormInput type="text" name="lastname" label="Nom" placeholder="Doe" containerClasses={['mb-small']} value={lastname} onChange={changeLastnameValue} isInvalid={errors.lastname ? true : false} />
                </div>
                <FormInput type="email" name="email" label="Adresse email" placeholder="exemple@email.com" containerClasses={['mb-small']} value={email} onChange={changeEmailValue} isInvalid={errors.email ? true : false} />
                <FormInput type="password" name="password" label="Mot de passe" containerClasses={['mb-small']} value={password} onChange={changePasswordValue} isInvalid={errors.password ? true : false} />
                <FormInput type="password" name="conf_password" label="Confirmation du mot de passe" containerClasses={['mb-grand']} value={confPassword} onChange={changeConfPasswordValue} isInvalid={errors.conf_password ? true : false} />

                <Button type="submit" text="Inscription" style="primary" moreClasses="mb-small" disabled={ loading } />
                <p>Déjà inscrit ?<br className="hidden-tablet hidden-desktop"></br> <a href="" onClick={onClickHandler} >Me connecter</a></p>
            </form>
        </div>
    );
}