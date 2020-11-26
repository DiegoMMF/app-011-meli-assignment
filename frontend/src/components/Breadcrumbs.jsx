import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Breadcrumbs({ category }) {
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://api.mercadolibre.com/sites/MLA/domain_discovery/search?q=${category}`,
            );
            setState(result.data);
        };
        fetchData();

        /* axios.get()
            .then(response => setState(response.data.path_from_root))
            .catch(error => console.log(error)) */
    }, [])

    return (
        <div className="container breadcrumbs">
            Hola
        </div>
    )
}
