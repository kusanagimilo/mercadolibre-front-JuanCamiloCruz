import React from 'react';

const Breadcum = ({filter})=> {
    return(
        <li className="breadcrumb-item active" aria-current="page">{filter}</li>
    )
}

export default Breadcum;