import React from 'react';
import './style.css'

const InventoryCard = ({title, data}) => {

    console.log(data);

    return (
        <div className="inventory-card-container">
            <h5>{title}</h5>
            {data.map((v) => {
                return(
                    <div className="inventory-single-block" style={{ backgroundColor: `${v.status === 'sold' ? '#e1e1e1' : '#9b9b9b' }`, color: `${v.status === 'sold' ? '#4a2e23' : '#fff' }`, cursor: `${v.status === 'sold' ? 'not-allowed' : 'pointer' }` }}>{v.number}</div>
                )
            })}
        </div>
    )
}

export default InventoryCard;


