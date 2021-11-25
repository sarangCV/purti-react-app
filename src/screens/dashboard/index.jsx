import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../../components/dashboard/Card';

import { useHistory } from 'react-router-dom';


import './style.css';
import Navbar from '../../components/navbar';

const Dashboard = () => {

    const history = useHistory();

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 2}
      ];

    return (
        <>
            <Navbar/>
            <div className="container-sec">
                <div className="border-sec">
                    <div className="container">
                        <div className="dashboard-carousel">
                            <Carousel breakPoints={breakPoints}>
                                <Card number="1" onClick={()=> history.push('/project-home')}/>
                                <Card number="2" onClick={()=> history.push('/project-home')}/>
                                <Card number="3" onClick={()=> history.push('/project-home')}/>
                                <Card number="4" onClick={()=> history.push('/project-home')}/>
                                <Card number="5" onClick={()=> history.push('/project-home')}/>
                                <Card number="6" onClick={()=> history.push('/project-home')}/>
                            </Carousel>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Dashboard
