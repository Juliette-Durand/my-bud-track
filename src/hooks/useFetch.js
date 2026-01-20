import { useState } from "react";

const useFetch = ( URL ) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = async (options = null) => {
        setLoading(true);
        setError(null);

        try {
            // Appel API
            const response = await fetch(URL, options);
            const json = await response.json();

            setResult(json);

            // Réponse erreur de l'API
            if (json?.succeed === false) {
                setError(json.error || { code: response.status, message: "Erreur API" });
            }
            return json;

        } catch (err) {
            const networkErr = { code: null, message: err?.message || "Erreur réseau" };
            setError(networkErr);
            setResult(null);
            return { succeed: false, error: networkErr };

        } finally {
            setLoading(false);
        }
    };

    return { result, error, loading, request };
};

export default useFetch;
