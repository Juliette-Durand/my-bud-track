import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    // Récupère l'état de connexion de l'utilisateur
    const { isLogin } = useContext(AuthContext);
    
    // Vérifie si connecté, sinon redirige vers la page de connexion
    return isLogin ? children : <Navigate to="/login"/>

};