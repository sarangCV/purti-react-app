import React from 'react';
import './style.css'

const Card = ({img, title}) => {
    return (
        <div className="card">
            <img src={img} alt="gallery" />
            <h3>{title}</h3>
        </div>
    )
}

export default Card
