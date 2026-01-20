import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const navigate = useNavigate();
    
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    
    // Fetch /auth/logout
    const { request } = useFetch(
        `${import.meta.env.VITE_API_URL}/auth/logout`
    );
    
    // Connexion
    // Enregistre les tokens, change le statut de connexion et redirige vers la page d'accueil
    const login = (accessToken, refreshToken) => {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setIsLogin(true);
        navigate("/");
    };

    // Déconnexion : vide les tokens et l'état
    // Vide les tokens, change le statut de connexion et redirige vers la page de connexion
    const logout = async () => {
        try {
            await request({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        } finally {
            // Déconnexion front quoi qu’il arrive
            setAccessToken(null);
            setRefreshToken(null);
            setIsLogin(false);
            navigate("/login");
        }
    };

    return (
        <AuthContext.Provider value={{
            isLogin,
            accessToken,
            refreshToken,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};