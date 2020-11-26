import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ItemDetails from '../components/ItemDetails'
import SearchBar from '../components/SearchBar'

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [categoryID, setCategoryID] = useState();


    useEffect(() => {
        // buscamos, por medio de la custom api, productos según query ingresada
        const fetches = async () => {
            const result = await axios(
                `https://app-meli-test.herokuapp.com/api/items/${id}`,
            );
            setProduct(result.data);
            // buscamos id de la categoría del producto
            if (product !== undefined) {
                const fetchResult = await axios(
                    `https://api.mercadolibre.com/items/${product.item.id}`,
                );
                setCategoryID(fetchResult.data.category_id);
            }
        };
        fetches();
    }, [id, product]);

    // TODO #14

    return (
        <div>
            <SearchBar />
            {
                (product !== undefined) 
                    ? <Breadcrumbs category={categoryID} /> 
                    : <div className="loading">Loading breadcrumbs...</div>
            }
            {
                (product !== undefined) 
                    ? <ItemDetails product={product} /> 
                    : <div className="loading">Loading products...</div>
            }
        </div>
    )
}
