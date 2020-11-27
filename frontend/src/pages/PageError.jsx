import React from 'react'
import mlbrand from '../assets/Logo_ML.png'


export default function PageError() {
    // TODO #1
    return (
        <div id="yellow">
            <div className="loading">
                <img src={mlbrand} alt=""/>
                <p>Wrong URL. Please, insert a right one.</p>
            </div>
        </div>
    )
}
