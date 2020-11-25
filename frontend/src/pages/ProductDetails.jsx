import React from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ItemDetails from '../components/ItemDetails'
import SearchBar from '../components/SearchBar'

export default function ProductDetails() {
    const location = useLocation()
    return (
        <div>
            <SearchBar />
            <p>{new URLSearchParams(location.search).get('q')}</p>
            {/* <Breadcrumbs category="test"/> */}
            {/* <ItemDetails item={new URLSearchParams(location.search).get('q')} />                */}
        </div>
    )
}
