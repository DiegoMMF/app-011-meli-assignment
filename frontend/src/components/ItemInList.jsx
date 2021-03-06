import React, { useState } from 'react'

// export default function ItemInList({ itemsList }) {
export default function ItemInList({ item }) {
    const [product] = useState(item)
    return (
        <div className="product-container">
            <img className="list-img" src={product.picture} alt="" />
            <div className="not-img">
                <div className="single-line">
                    <div className="price-shipping">
                        <h1>$ {new Intl.NumberFormat().format(product.price.amount)}</h1>
                        <img className="free-shipping-logo" src="../assets/ic_shipping.png" alt="" />
                    </div>
                    <p>extraer location</p>
                </div>
                <h3>{product.title}</h3>
            </div>
        </div>
    )
}