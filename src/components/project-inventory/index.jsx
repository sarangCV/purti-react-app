import React from 'react';
import './style.css'

const InventoryCard = ({title, data}) => {

    console.log(data);

    return (
        <div className="inventory-card-container">
            <h5>{title}</h5>
            {data.map((v) => {
                return(
                    <div className="inventory-single-block" style={{backgroundColor: `${v.status === 'sold' ? '#a5896a' : '#784b1c' }`, cursor: `${v.status === 'sold' ? 'not-allowed' : 'pointer' }` }}>{v.number}</div>
                )
            })}
        </div>
    )
}

export default InventoryCard;


