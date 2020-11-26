import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import '../App.css'
import lupa from '../assets/ic_Search.png'
import mlbrand from '../assets/Logo_ML.png'

export default function SearchBar() {
    // TODO #4
    const [search, setSearch] = useState("");
    let history = useHistory();
    
    /**
     * redirects to <SearchResults />
     * @param {event} e 
     */
    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/items?q=${search}`);
    }
        
    return (
        <div className="search-bar">
            <Link to="/">
                <img id="meli-brand-logo" src={mlbrand} alt="logo" />
            </Link>
            <form id="input-with-btn" onSubmit={handleSubmit}>
                <input type="text" className="inputspace" value={search} onChange={e => setSearch(e.target.value)}
                    placeholder="Nunca dejes de buscar" />
                <button type="submit" >
                    <img src={lupa} alt="lupa" />
                </button>
            </form>
        </div>
    )
}