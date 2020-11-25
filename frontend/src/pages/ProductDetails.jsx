import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ItemDetails from '../components/ItemDetails'
import SearchBar from '../components/SearchBar'

export default function ProductDetails() {
    const { id } = useParams();
    const [ product, setProduct ] = useState()
    
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `https://app-meli-test.herokuapp.com/api/items/${id}`,
          );     
          setProduct(result.data);
        };     
        fetchData();
      }, [id]);
    
    

    return (
        <div>
            <SearchBar />
            <Breadcrumbs productID={id}/>
            {(product !== undefined) ? <ItemDetails product={product} /> : null}
        </div>
    )
}
