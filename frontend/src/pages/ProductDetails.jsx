import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ItemDetails from '../components/ItemDetails'
import SearchBar from '../components/SearchBar'

export default function ProductDetails() {
    
    const { id } = useParams();

    return (
        <div>
            <SearchBar />
            
            {/* <Breadcrumbs category="test"/> */}
            {/* <ItemDetails item={new URLSearchParams(location.search).get('q')} />                */}
        </div>
    )
}
