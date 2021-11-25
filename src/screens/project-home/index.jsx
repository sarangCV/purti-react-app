import React from 'react';
import projectLogo from '../../assets/project-home/project-logo.jpg';
import Card from '../../components/project-home/Card';
// importing logos
import { apartment, apartment_grey, floor_plan, floor_plan_two, gallery, galler_two, info, info_two, inventory, inventory_two, walkthrough, walkthrough_two } from '../../assets/icons';
import Navbar from '../../components/navbar';

import './style.css';

const ProjectHome = () => {
    return (
        <>
            <Navbar title="PROJECT HOME"/>
            <div className="container-sec">
                <div className="border-sec">
                    <div className="container">
                        <div className="project-home-header">
                            <div className="project-logo">
                                    <img src={projectLogo} alt="logo" />
                            </div>
                            <div className="project-info">
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
                                        <div className="col-4">SOLD OUT</div>
                                    </div>
                            </div>
                        </div>
                        <div className="project-home-menu">
                            <Card img={galler_two} title="GALLERY"/>
                            <Card img={floor_plan_two} title="FLOOR PLAN"/>
                            <Card img={info_two} title="INFO"/>
                            <Card img={walkthrough_two} title="WALK THROUGH"/>
                            <Card img={inventory_two} title="INVENTORY"/>
                        </div>
                        <div className="project-home-footer">
                            <button className="btn btn-primary login-btn" type="submit">
                                Pricing
                            </button>
                            <button className="btn btn-primary login-btn" type="submit">
                                Send Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectHome;
