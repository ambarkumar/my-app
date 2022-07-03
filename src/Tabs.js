import React from 'react';
import { Col} from 'react-bootstrap';
import Logo from '../src/assets/logo.png';
import {NavLink, useLocation} from "react-router-dom";
import './Tabs.css';

function Tabs() {
    const location = useLocation();
    const pathName = location.pathname;

    console.log(pathName, 'test');
    return(
        <>
        <Col xs={3} className='border-end p-3 d-flex flex-column justify-content-center align-items-center'>
          <Col className='p-3'><img src={Logo} className="img-fluid" alt="..." /></Col>

          <NavLink to="/" className={({isActive}) => `fs-5 tabs ${isActive ? 'activeCSS' : 'nonactiveCSS' }`}><span>Project</span></NavLink>

          <NavLink to="/epics" className={({isActive}) => `fs-5 tabs ${isActive ? 'activeCSS' : 'nonactiveCSS' }`}><span>Epics</span></NavLink>
        </Col>
        </>
    )
}

export default Tabs;