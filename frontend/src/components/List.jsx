import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemInList from './ItemInList'

// TODO #11

export default function List({ items }) {
    const [results] = useState(items)

    return (
        <div className="container">
            {
                (results !== null)
                    ? results.map(item =>
                        <Link to={`/items/${item.id}`}>
                            <ItemInList key={item.id} item={item} />
                        </Link>)
                    : <div>Loading...</div>
            }
        </div>
    )
}
