import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Breadcrumbs({ categoryID }) {
    const [state, setState] = useState([]);
    useEffect(() => {
        Axios.get(`https://api.mercadolibre.com/categories/${categoryID}`)
            .then(response => setState(response.data.path_from_root))
            .catch(error => console.log(error))
    }, []) 
    return (
    <div className="container breadcrumbs">
        {state.map(item => <span>{item.name}</span>)}
    </div>
    )
}
