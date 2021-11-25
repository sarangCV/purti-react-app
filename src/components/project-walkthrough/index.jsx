import React from 'react';
import './style.css'

const WalkthroughCard = ({video}) => {
    return (
        <div className="gallery-card">
            <video src={video} width="1000px" height="600" controls="controls" autoplay="true"/>
        </div>
    )
}

export default WalkthroughCard;
