import React,{ useState} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import AddProject from '../src/assets/addProject.svg';
import './Tabs.css';
import Tabs from './Tabs';
function Epics() {
    const [show, setshow] = useState(false);

    return(
        <>
        <Container className='border'>
            <Row>
                <Tabs />
                <Col xs={9} className='p-4'>
                    <h2>Epics</h2>
                    <h4 className='mt-4'>Project 1</h4>
                    <Col role="button" className='pb-4 pt-4' onClick={() => setshow(true)}>
                        <img src={AddProject} alt="Add Project" />
                        <span className='ps-2 fs-5'>Add Epic</span>
                    </Col>
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default Epics;