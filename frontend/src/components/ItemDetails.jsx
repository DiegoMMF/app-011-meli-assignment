import React, { useState } from 'react'

const dummyProduct = {
    author: {
        name: "Diego M.",
        lastname: "Maldini Freyre"
    },
    item: {
        id: "MLA818555410",
        title: "Asrock X399 Taichi Str4 Sata 6gb/s Usb 3.1/3.0 Atx Amd Mo...",
        price: {
            currency: "ARS",
            amount: 88969,
            decimals: 0
        },
        picture: "http://http2.mlstatic.com/D_792801-MLA32449107349_102019-I.jpg",
        condition: "new",
        free_shipping: true,
        sold_quantity: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium repellat et molestias hic fugiat quisquam quos eaque deleniti odio quas a officia tempore modi nulla, quod, culpa saepe animi magnam? Expedita deserunt qui, quod recusandae debitis optio quas aut nam quo accusantium iure, amet quaerat totam dignissimos, ratione rerum commodi."
    }
}

export default function ItemDetails({ item }) {
    const [ product ] = useState(item);    
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
