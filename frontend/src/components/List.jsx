import React, { useState } from 'react'
import ItemInList from './ItemInList'


export default function List({ items }) {
    const [ results ] = useState(items)
    
    return (
        <div className="container">
            {
                (results !== null) ?
                    results.map(item => <ItemInList key={item.id} item={item} />) :
                    <div>Loading...</div>
            }
        </div>
    )
}
