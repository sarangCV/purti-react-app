import React from 'react';
import './style.css'

const DashboardCard = ({title, onClick}) => {
    return (
        <div className="dashboard-card" onClick={onClick}>
            <h2>{title}</h2>
        </div>
    )
}

export default DashboardCard
