import React from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ItemAlone from '../components/ItemAlone'
import SearchBar from '../components/SearchBar'

export default function ProductDetails() {
    const location = useLocation()
    return (
        <div>
            <SearchBar />
            <p>{new URLSearchParams(location.search).get('q')}</p>
            <Breadcrumbs category="test"/>
            <ItemAlone />               
        </div>
    )
}
