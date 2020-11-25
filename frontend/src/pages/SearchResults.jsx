import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import List from '../components/List';
import SearchBar from '../components/SearchBar'

export default function Results() {
    const [ search, setSearch ] = useState()
    const location = useLocation()
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `https://app-meli-test.herokuapp.com/api/items?q=${new URLSearchParams(location.search).get('q')}`,
          );     
          setSearch(result.data);
        };     
        fetchData();
      }, [location]);

    

    return (
        <div>
            <SearchBar />
            {(search !== undefined) ?
                <Breadcrumbs category={search.categories[0]} /> :
                <div>Loading breadcrumbs...</div>
            }
            {(search !== undefined) ?
                <List items={search.items} /> :
                <div>Loading products...</div>
            }
        </div>
    )
}
