import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import List from '../components/List';
import SearchBar from '../components/SearchBar'

export default function Results() {
    const { id } = useParams();
    const [search, setSearch] = useState({})
    
    useEffect(() => {
        // effect
        Axios.get(`localhost:4000/api/items?q=${id}`)
            .then(response => setSearch(response.data.results))
            .catch(error => console.error(error))
        // return () => { cleanup }
    }, [id])

    return (
        <div>
            <SearchBar />
            <p className="breadcrumbs">(acá van las breadcrumbs)</p>
            <List items={search} />
        </div>
    )
}
