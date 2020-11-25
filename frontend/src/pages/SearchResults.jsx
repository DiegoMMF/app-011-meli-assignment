import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import List from '../components/List';
import SearchBar from '../components/SearchBar'

export default function Results() {
    const { id } = useParams();
    const [ search, setSearch ] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `https://app-meli-test.herokuapp.com/api/items?q=${id}`,
          );     
          setSearch(result.data);
        };     
        fetchData();
      }, [id]);

    

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
