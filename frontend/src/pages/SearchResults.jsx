import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import List from '../components/List';
import SearchBar from '../components/SearchBar'
import dummyQuery from '../data/dummyQuery';

export default function Results() {
    const { id } = useParams();
    const [search, setSearch] = useState({})
    
    useEffect(() => {
        /* axios.get(`127.0.0.1:4000/api/items?q=${search.id}`) */
        // axios.get("192.168.1.8:4000/api/items/taichi")
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${id}`)
            .then(response => setSearch(response.data.results))
            .catch(error => console.error(error))
            
    }, [])

    return (
        <div>
            <SearchBar />
            {/* {search.author.name} */}
            <Breadcrumbs categoryID="MLA1271"/>
            <List items={search} />
        </div>
    )
}
