import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProject from '../src/assets/addProject.svg';
import deleteIcon from '../src/assets/delete.svg'
import Tabs from './Tabs';
import './Tabs.css';
import {Col, Container, Form, Modal, Row} from 'react-bootstrap';
function Project() {
    const [title, setTitle] = React.useState();
    const [startData, setStartData] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const [projectData, setProjectData] = useState([]);
    const [show, setshow] = useState(false);
    const isDisabled = !title || !startData || !endDate;
    const handleSave = () => {
      const project = {
        title,
        startData,
        endDate, 
      };
  
      const newProjectData = [...projectData, project];
      localStorage.setItem('projectData', JSON.stringify(newProjectData));
      setProjectData(newProjectData);
      setshow(false);
    };
  
    const handleDelete = (title) => {
      const newProjectData = projectData.filter((p) => p.title !== title);
      localStorage.setItem('projectData', JSON.stringify(newProjectData));
      setProjectData(newProjectData);
    };
  
    useEffect(() => {
      if (localStorage.getItem('projectData')) {
        const projectData = JSON.parse(localStorage.getItem('projectData'));
        setProjectData(projectData);
      }
    }, []);
    return(
        <>
           
    <Container className='border'>
    <Row>
     <Tabs />
      <Col xs={9} className='p-4 bgColor'>
       <h2>Project</h2>
        <Col role="button" className='pb-4 pt-4' onClick={() => setshow(true)}>
           <img src={AddProject} alt="Add Project" />
            <span className='ps-2 fs-5'>Add New Project</span>
        </Col>

        <Col className='mt-4'>
          {projectData && !!projectData.length && (
          <>
            <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
              {projectData?.map?.((project) => {
                const { title, startData, endDate } = project;
                const formatedSD = moment(startData).format('Do MMMM YYYY');
                const formatedED = moment(endDate).format('Do MMMM YYYY');
                return (
                  <tr key={title}>
                    <td>{title}</td>
                    <td>{formatedSD}</td>
                    <td className="w-50">{formatedED}</td>
                    <td align='center'>
                      <span onClick={() => handleDelete(title)}>
                        <img src={deleteIcon} alt="Remove Icon" />
                      </span>
                    </td>
                  </tr>
                 
                );
              })}
              </tbody>
            </table>
          </>
        )}
          </Col>
      </Col>
    </Row>

</Container>
 <Modal
  show={show}
  onHide={() => setshow(false)}
  size="md"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  >
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter" className='fs-5'>Add New Project</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      </Form.Group>

      <Row>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date"   value={startData} onChange={(e) => setStartData(e.target.value)} placeholder="Start Date" />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date"  min={startData}  value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
          </Form.Group>
        </Col>

      </Row>

      <div className="mt-3 mb-3 d-grid gap-2 col-2 mx-auto justify-content-center">
        <button onClick={handleSave} disabled={isDisabled} className="fs-5 btn btn-primary createButton" type="button">Create</button>
      </div>
    </Form>

    </Modal.Body>
  </Modal>
</>
    )
}

export default Project;