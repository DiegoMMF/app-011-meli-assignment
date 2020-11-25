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
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        axios.get(`https://app-meli-test.herokuapp.com/api/items?q=${id}`)
            .then(response => response.data.results)
            .catch(error => console.error(error))
        /* setSearch(response) */
        console.log("id", id);
        console.log("search", search);
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
