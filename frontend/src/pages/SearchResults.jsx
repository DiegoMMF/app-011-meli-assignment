import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import List from '../components/List';
import SearchBar from '../components/SearchBar'

export default function Results() {
  const [search, setSearch] = useState()
  const [categoryID, setCategoryID] = useState("")
  const location = useLocation()

  useEffect(() => {
    // buscamos detalles del item por medio de la custom api
    const fetchData = async () => {
      // TODO #7
      const query = new URLSearchParams(location.search).get('search')
      const result = await axios(
        `https://app-meli-test.herokuapp.com/api/items?q=${query}`,
      );
      setSearch(result.data);
      // buscamos id de la categoría del producto
      const fetchResult = await axios(
          `https://api.mercadolibre.com/sites/MLA/domain_discovery/search?q=${search}`,
        );
        setCategoryID(fetchResult.data);
      
    };
    fetchData();
  }, [location, search]);



  return (
    <div>
      <SearchBar />
      {
        (search !== undefined) 
          ? <Breadcrumbs category={categoryID} /> 
          : <div className="loading">Loading breadcrumbs...</div>
      }
      {
        (search !== undefined) 
          ? <List items={search.items} /> 
          : <div className="loading">Loading products...</div>
      }
    </div>
  )
}
