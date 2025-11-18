import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false)

    // Change l'état de connexion et redirige vers la page d'accueil
    const login = () => {
        setIsLogin(true);
        navigate('/');
    }

    // Change l'état de connexion et redirige vers la page de connexion
    const logout = () => {
        setIsLogin(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{
            isLogin,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}