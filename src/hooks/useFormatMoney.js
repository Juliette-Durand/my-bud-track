import { useCallback } from "react";

/**
 * Formattage d'une valeur monétaire
 * @returns { String } valeur formattée
 */
export function useFormatMoney() {

    const formatMoney = useCallback((value) => {

        const number = parseFloat(value);

        if (isNaN(number)) return "0,00";

        return number
            .toFixed(2) // impose les 2 décimales
            .replace(".", ",") // transforme le "." en ","
            .replace(/\B(?=(\d{3})+(?!\d))/g, " "); // ajoute espace pour milliers
    }, []);

    return { formatMoney };
}
