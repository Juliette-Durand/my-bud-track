import { useState } from "react";

const useFetch = ( URL ) => {

    const [ result, setResult ] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const request = async (options = null) => {
        try {

            const response = await fetch(`${URL}`, options);
            const data = await response.json();

            setResult(data);
            setLoading(false);
         }catch(err) {

            setError(err);

        }
    }
    
    return { result, error, loading, request }
}

export default useFetch;