import React from 'react'
// TODO #13
export default function ItemDetails({ product }) {
    return (
        <div className="container">
            <div className="product-container">
                <div className="description-section">
                    <img className="item-img" src={product.item.picture} alt="" />

                    <h2 className="description-title">Descripción del Producto</h2>
                    <p className="description-content">{product.item.description}</p>
                </div>
                <div className="item-principal">
                    <p>{product.item.condition} - {product.item.sold_quantity}</p>
                    <h3>{product.item.title}</h3>
                    <h1 className="price">$ {new Intl.NumberFormat().format(product.item.price.amount)}</h1>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}
