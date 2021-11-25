import React from 'react';
import Carousel from 'react-elastic-carousel';
import InventoryCard from '../../components/project-inventory';
import Navbar from '../../components/navbar';
import projectLogo from '../../assets/project-inventory/1.jpg';
import { apartment, apartment_grey, floor_plan, floor_plan_two, gallery, galler_two, info, info_two, inventory, inventory_two, walkthrough, walkthrough_two } from '../../assets/icons';
import {data_one, data_three, data_two} from '../../dummy'

import './style.css';

const Inventory = () => {


    return (
        <>
            <Navbar title="PROJECT INVENTORY"/>
            <div className="container-sec">
                <div className="border-sec">
                <div className="container">
                        <div className="project-home-header inventory-header">
                            <div className="header-title">
                                <div className="building-status-sec-one">
                                    SOLD
                                </div>
                                <div className="building-status-sec-two">
                                    AVAILABLE
                                </div>
                            </div>
                            <div className="project-logo">
                                {/* <img src={projectLogo} alt="logo"/> */}
                                <h3>Tower 1</h3>
                            </div>
                            <div className="project-info project-info-inventory">
                                <div className="project-info-inner">
                                    <div className="project-info-inner-row project-info-inner-row-first">
                                        <div className="col-3">1 BHK</div>
                                        <div className="col-3"><img src={apartment} /></div>
                                        <div className="col-4">AVAILABLE</div>
                                    </div>
                                    <div className="project-info-inner-row">
                                        <div className="col-3">2 BHK</div>
                                        <div className="col-3"><img src={apartment_grey} /></div>
                                        <div className="col-4">SOLD OUT</div>
                                    </div>
                                    <div className="project-info-inner-row">
                                        <div className="col-3">2.5 BHK</div>
                                        <div className="col-3"><img src={apartment} /></div>
                                        <div className="col-4">AVAILABLE</div>
                                    </div>
                                    <div className="project-info-inner-row">
                                        <div className="col-3">3 BHK</div>
                                        <div className="col-3"><img src={apartment_grey} /></div>
                                        <div className="col-4">FEW LEFT</div>
                                    </div>
                                </div>
                                <button className="btn btn-primary login-btn inventory-header-btn" type="submit">
                                        Choose Tower
                                </button>
                            </div>
                        </div>
                        <div className="project-home-menu">
                            <InventoryCard title="Level 1" data={data_one}/>
                            <InventoryCard title="Level 2" data={data_two}/>
                            <InventoryCard title="Level 3" data={data_three}/>
                            <InventoryCard title="Level 4" data={data_one}/>
                            <InventoryCard title="Level 5" data={data_three}/>
                            <InventoryCard title="Level 6" data={data_two}/>
                        </div>
                        <div className="project-inventory-footer">
                            <button className="btn btn-primary login-btn" type="submit">
                                Block
                            </button>
                            <button className="btn btn-primary login-btn" type="submit">
                                Mark as sold
                            </button>
                            <button className="btn btn-primary login-btn" type="submit">
                                Make available again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inventory
