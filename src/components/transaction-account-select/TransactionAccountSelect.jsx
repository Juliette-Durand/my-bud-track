import { useState, useRef, useEffect } from "react";
import classes from './TransactionAccountSelect.module.css';

export const TransactionAccountSelect = ({ isDestAccount = false }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState("Choisir un compte"); // Valeur d'affichage dans select
    const [srcAccount, setSrcAccount] = useState(""); // Valeur pour champ caché
    const [search, setSearch] = useState(""); // Valeur dans la barre de recherche
    const [filteredAccounts, setFilteredAccounts] = useState([]); // Liste des comptes publics filtrés par la barre de recherche

    const dropdownRef = useRef(null); // Stocke la référence du dropdown

    const publicAccounts = [
        { value: "1", label: "Super U" },
        { value: "cafe-machine", label: "Distributeur café" },
        { value: "station-service", label: "Station service" },
        { value: "cantine", label: "Cantine" },
        { value: "boulangerie", label: "Boulangerie" },
    ];

    // Clic sur le bouton select
    const buttonClickHandler = () => {
        setIsOpen((prev) => !prev); // Retour à l'état précédent
    }

    // Au chargement du composant
    useEffect(() => {
        const handleClickOutside = (e) => {
            // Si le dropdown existe et que l'élément cliqué n'est pas dans le dropdown
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        // Supprime l'eventListener au moment de détruire le composant (ex: changement de page)
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Gère la sélection d'un compte au clic
    const handleSelection = (label, value) => {
        setSelectedLabel(label); // Affiche le compte sélectionné
        setSrcAccount(value);
        setIsOpen(false);
        setSearch("");
    };

    // Filtre la liste des comptes publics à la recherche
    const onChangeHandler = (e) => {
        const value = e.target.value;
        setSearch(value);

        const trimmedSearch = value.trim();

        if (trimmedSearch.length < 2) { // Minimum 2 caractères pour filtrer la liste (pour éviter les listes de 3km)
            setFilteredAccounts([]);
        } else {
            const filteredList = publicAccounts.filter((account) => {
                console.log(account.label.toLowerCase().includes(trimmedSearch.toLowerCase()));
                
                return account.label.toLowerCase().includes(trimmedSearch.toLowerCase());
            });
            setFilteredAccounts(filteredList);
        }
    };

    return (
        <div className={`${classes["account-select"]} ${isOpen ? classes["open"] : ""}`} ref={dropdownRef} >
        
            <button className={`${classes["select-button"]} ${isDestAccount && classes["dest"]}`} onClick={ buttonClickHandler } type="button" >
                <span className={classes["selected-label-title"]}>Compte { isDestAccount ? "destinataire" : "source" } :</span>
                <span className={classes["selected-label"]}>
                    {selectedLabel}
                </span>
            </button>

            {isOpen && (
                <div className={classes["dropdown"]}>
                    
                    {/* Mes comptes */}
                    <div className={classes["section"]}>
                        <div className={classes["section-title"]}>Mes comptes</div>
                        <ul className={`${classes["account-list"]} ${classes["personal-accounts"]}`}>
                            <li onClick={() => handleSelection("Compte courant", "1")}>Compte courant</li>
                            <li onClick={() => handleSelection("Livret A", "2")}>Livret A</li>
                            <li onClick={() => handleSelection("Épargne", "3")}>Épargne</li>
                        </ul>
                    </div>

                    {/* Recherche */}
                    <div className={classes["section"]}>
                        <div className={classes["section-title"]}>Rechercher un compte public</div>

                        <input type="text" className={ classes["public-search-input"] } placeholder="Ex: Super U, Distributeur café..."
                            value={search} onChange={ onChangeHandler } />
                    </div>

                    {/* Résultats publics */}
                    { filteredAccounts.length > 0 && (
                        <div className={ classes["section"] }>
                            <ul className={ `${classes["account-list"]} ${classes["public-results"]}` }>
                                {filteredAccounts.map((account) => (
                                    <li key={account.value} onClick={() => handleSelection(account.label, account.value)} >
                                        {account.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <input type="hidden" name="selectedAccount" value={srcAccount} />
        </div>
    );
}