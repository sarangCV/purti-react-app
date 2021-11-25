import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { useHistory, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar';

import './style.css'

const CustomerEntry = () => {

    const history = useHistory();

    const projects = [
        {
            key: 1,
            text: 'Project 1',
            value: 'Project 1'
        },
        {
            key: 2,
            text: 'Project 2',
            value: 'Project 2'
        },
        {
            key: 3,
            text: 'Project 3',
            value: 'Project 3'
        },
        {
            key: 4,
            text: 'Project 4',
            value: 'Project 4'
        }
    ]
    return (
        <>
            <Navbar title="Customer entry"/>
            <div className="container-sec">
                <div className="border-sec">
                    <div className="container">
                        <div className="customer-title">
                            <h3>Enter the details to continue</h3>
                        </div>
                        <div className="customer-form-sec">
                            <form className="customer-form">
                                <label>Enter the number</label>
                                <input type="number" className="form-control login-input" placeholder="Number" />
                                <label>Enter the name</label>
                                <input type="text" className="form-control login-input" placeholder="Name"/> 
                                <label>Enter the email</label>
                                <input type="email" className="form-control login-input" placeholder="Email"/> 
                                <label>Pick a project intrested in</label>
                                <div className="customer-form-dropdown">
                                    <Dropdown placeholder='Choose' search selection options={projects} />
                                </div>
                                
                                <button className="btn btn-primary login-btn" type="submit" onClick={() => history.push('/dashboard')}>
                                    Continue
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
        
    )
}

export default CustomerEntry
