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

// export default function ItemInList({ itemsList }) {
export default function ItemInList({ itemsList }) {
    const [product] = useState(dummyProduct)
    return (
        // itemsList.map(product => 
        <div className="product-container">
            <img className="list-img" src={product.item.picture} alt="" />
            <div className="">
                <div className="single-line">
                    {/* Debemos colocar correctamente el importe a figurar */}
                    <h1>{product.item.price.amount}</h1>
                    <img className="free-shipping-logo" src={product.item.picture} alt="" />
                    <p>extraer location</p>
                </div>
                <h3>{product.item.title}</h3>
            </div>
        </div>
    )
}