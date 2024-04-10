import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';


//images
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import img from './images/sideimg2.jpg';
import img2 from './images/iconimg2.png';
import img3 from './images/iconimg3.png';
import img4 from './images/iconimg4.png';
import img5 from './images/iconimg5.png';

//cards

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {
  
  return (
    <>
     
    <div  className='content-body'>
    <div>
    <Container>
      <Row>
         <Col xs={6} md={4} className='content-img'>
          <Image src={img}  alt='img' height={800}  width={600} />
        </Col>
       
      </Row>
      </Container>
    </div>
    <div className='contect-info' >
     <Container className='content-cards'>
      <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }} className='card-data 'align="centre">
          <div  className='cards-img'>
        <Card.Img  src={img2}     /></div>
        <Card.Body>
        <Card.Title>APTITUDE</Card.Title>
          <Card.Text>
          To quantify peoples' beliefs and behaviors to inform decisions,understand human differences,and gain knowledge 
          </Card.Text>
          
          <Link to="/appti">
         
          <Button variant="outline-info">Learn more</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }} className='card-data' >
          <div  className='cards-img'>
        <Card.Img  src={img3}   /></div>
        <Card.Body>
        <Card.Title>VERBAL ABILITY</Card.Title>
          <Card.Text>
          Enables individuals to express themselves clearly, understand complex ideas, and communicate effectively with others.
          </Card.Text>
          <Link to="/verbal">
            <Button variant="outline-info" >learn more</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
     </Container>
     <Container className='content-cards'>
      <Row>
        <Col xs={6} md={4}>
        
        <Card style={{ width: '18rem' }}  className='card-data'>
        <div className='cards-img' >
        <Card.Img  src={img4}   /> </div>
        <Card.Body>
        <Card.Title>TECHNICAL INTERVIEW</Card.Title>
          <Card.Text>
          To prepare for a technical interview, review the job description to understand the required skills
          </Card.Text>
          <Link to="/tech">
          <Button variant="outline-info">learn more</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }} className='card-data'>
          <div className='cards-img' >
        <Card.Img  src={img5}  /></div>
        <Card.Body>
        <Card.Title>HR INTERVIEW</Card.Title>
          <Card.Text>
          To assess a candidate's qualifications for the job they are interviewing for
          </Card.Text>
          <Link to="/hr">
          <Button variant="outline-info">learn more</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
     </Container>
    </div>
   </div>
    </>
  )
}



export default Home;