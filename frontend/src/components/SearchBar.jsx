import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import '../App.css'
import lupa from '../assets/ic_Search.png'
import mlbrand from '../assets/Logo_ML.png'

/**
 * Si no transformo estos caracteres, la api de mercadolibre no me devuelve nada.
 * @param {String} string 
 */
const urlEncoder = string => {
    let auxString = string.slice();
    auxString = auxString.replaceAll('á', 'a');
    auxString = auxString.replaceAll('Á', 'a');
    auxString = auxString.replaceAll('é', 'e');
    auxString = auxString.replaceAll('É', 'e');
    auxString = auxString.replaceAll('í', 'i');
    auxString = auxString.replaceAll('Í', 'i');
    auxString = auxString.replaceAll('ó', 'o');
    auxString = auxString.replaceAll('Ó', 'o');
    auxString = auxString.replaceAll('ú', 'u');
    auxString = auxString.replaceAll('Ú', 'u');
    auxString = auxString.replaceAll('ñ', 'n');
    return auxString;
}

export default function SearchBar() {
    // TODO #4
    const [search, setSearch] = useState("");
    let history = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/items?search=${urlEncoder(search)}`);
    }
        
    return (
        <div className="search-bar">
            <Link to="/">
                <img id="meli-brand-logo" src={mlbrand} alt="logo" />
            </Link>
            <form id="input-with-btn" onSubmit={handleSubmit}>
                <input type="text" className="inputspace" value={search} onChange={e => setSearch(e.target.value)}
                    placeholder="Nunca dejes de buscar" />
                <button type="submit" id="lupa">
                    <img src={lupa} alt="lupa" />
                </button>
            </form>
        </div>
    )
}