import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import lupa from '../assets/ic_Search.png'
import mlbrand from '../assets/Logo_ML.png'

export default function SearchBar() {
    const [search, setSearch] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        return(
            <Link to="/items" />
        )
    }
        
    return (
        <div className="search-bar">
            <img id="meli-brand-logo" src={mlbrand} alt="logo" />
            <form id="input-with-btn" onSubmit={handleSubmit}>
                <input type="text" className="inputspace" value={search} onChange={e => setSearch(e.target.value)} placeholder="Nunca dejes de buscar" />
                <button type="submit" >
                    <img src={lupa} alt="lupa" />
                </button>
            </form>
        </div>
    )
}