import React from 'react'
import '../App.css'
import lupa from '../assets/ic_Search.png'
import mlbrand from '../assets/Logo_ML.png'

export default function SearchBar() {
    return (
        <div className="search-bar">
            <img src={mlbrand} alt="logo" />
            <div>
                <input type="text" className="inputspace" placeholder="Nunca dejes de buscar" />
                <button type="submit">
                    <img src={lupa} alt="lupa" />
                </button>
            </div>
        </div>
    )
}