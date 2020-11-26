import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Breadcrumbs({ category }) {
    const [state, setState] = useState([]);

    useEffect(() => {
        
        (async () => {
            const result = await axios(
                `https://api.mercadolibre.com/categories/${category}`,
            );
            setState(result.data.path_from_root);
        })();
        
    }, [category])

    return (
        <div className="container breadcrumbs">
            {(state !== undefined) ?
                state.map(elem => <span> &gt; {elem.name}</span>) : null
            }
        </div>
    )
}
