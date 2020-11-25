import React, { useEffect, useState } from 'react'
import dummyProduct from '../data/dummyProduct'
import dummyQuery from '../data/dummyQuery'
import ItemInList from './ItemInList'


export default function List({ items }) {
    const [results, setResults] = useState(items)
    
    return (
        /* searchResults.map(...) */
        <div className="container">
            <ItemInList item={dummyProduct} />
            <ItemInList item={dummyProduct} />
            <ItemInList item={dummyProduct} />
            <ItemInList item={dummyProduct} />
            <ItemInList item={dummyProduct} />
        </div>
    )
}
