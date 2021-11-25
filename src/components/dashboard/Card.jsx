import React from 'react';
import './style.css'

const Card = ({number, onClick}) => {
    return (
        <div className="card" onClick={onClick}>
            <h2>{number}</h2>
        </div>
    )
}

export default Card
