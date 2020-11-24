import React from 'react'
import ItemInList from './ItemInList'

export default function ProductList() {
    return (
        <div className="container">
            <p className="breadcrumbs">(acá van las breadcrumbs)</p>
            <ItemInList />
            <ItemInList />
            <ItemInList />
            <ItemInList />
            <ItemInList />
        </div>
    )
}
