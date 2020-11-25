import React, { useState } from 'react'

// export default function ItemInList({ itemsList }) {
export default function ItemInList({ item }) {
    const [product/* , setProduct */] = useState(item)
    return (
        // itemsList.map(product => 
        <div className="product-container">
            <img className="list-img" src={product.item.picture} alt="" />
            <div className="not-img">
                <div className="single-line">
                    {/* Debemos colocar correctamente el importe a figurar */}
                    <div className="price-shipping">
                        <h1>$ {new Intl.NumberFormat().format(product.item.price.amount)}</h1>
                        <img className="free-shipping-logo" src="../assets/ic_shipping.png" alt="" />
                    </div>
                    <p>extraer location</p>
                </div>
                <h3>{product.item.title}</h3>
            </div>
        </div>
    )
}