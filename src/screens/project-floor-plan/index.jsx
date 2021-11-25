import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../../components/project-floor-plan';
import Navbar from '../../components/navbar';

import './style.css';

const FloorPlan = () => {


    return (
        <>
            <Navbar title="PROJECT FLOOR PLAN"/>
            <div className="container-sec">
                <div className="border-sec">
                    <div className="container">
                    <div className="project-home-menu">
                            <Card title="1.5 BHK"/>
                            <Card title="2 BHK"/>
                            <Card title="2.5 BHK"/>
                            <Card title="3 BHK"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FloorPlan
