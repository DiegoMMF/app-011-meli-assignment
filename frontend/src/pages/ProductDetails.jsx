import React from 'react'
import { useLocation } from 'react-router-dom'
import ItemAlone from '../components/ItemAlone'
import SearchBar from '../components/SearchBar'


export default function ProductDetails() {
    const location = useLocation()
    return (
        <div>
            <SearchBar />
            <p>{new URLSearchParams(location.search).get('q')}</p>
            <p className="breadcrumbs">(acá van las breadcrumbs)</p>
            <ItemAlone />               
        </div>
    )
}
