import React, { useState } from 'react';
import './Profile.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Store from './Store';
const Profile= () => {

    const [fname,setfname] = useState('');
    const [email,setemail] = useState('');
    const [date,setdate] = useState('');
    const [mobile,setmobile] = useState('');
    const [address,setaddress] = useState('');
    const [gender,setgender] = useState('');
    const [cname,setcname] = useState('');
    const [dname,setdname] = useState('');
    const [year,setyear] = useState('');
    const [cgpa,setcgpa] = useState('');
    const [validated,setvalidated] = useState(false);


    

    const handleSubmit = () =>{
        const userdata ={
          fname:fname, 
          email:email,
           date:date, 
           mobile:mobile, 
           address:address, 
           gender:gender, 
           cname:cname,
           dname:dname, 
           year:year,
           cgpa:cgpa
        };

        axios.post(`http://localhost:5000/users`,userdata)
        .then(res => {
          console.log(res.data);
        }) 
        .catch (error => {
          console.log(error);

        });
        setvalidated(true);
      };
  
    const [file, setFile] =useState([]);
   
    const handleChange = e => {
      setFile([...file, e.target.files[0]]);

      
      
    }

   
  return (
    <>
    <div>
    <Form className='main' nonvalidated validated={validated} onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <br></br>
        
        <h2>Personal Details</h2><br></br>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label >Full Name:</Form.Label>
          <Form.Control type="name" placeholder="Enter full name" className='formfield' value={fname} onChange={(n)=>{setfname(n.target.value)}} required/>
        </Form.Group>

        

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='formfield' pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$' value={email} onChange={(n)=>{setemail(n.target.value)}} required/>
        </Form.Group>

       
      </Row>

      <Row>
      <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Date Of Birth:</Form.Label>
          <Form.Control type="date" placeholder="Enter date of birth" className='formfield' value={date} onChange={(n)=>{setdate(n.target.value)}} />
        </Form.Group>

      <Form.Group as={Col} controlId="formGridMobile">
          <Form.Label>Mobile Number:</Form.Label>
          <Form.Control type="number" placeholder="Enter mobile number"className='formfield' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' value={mobile} onChange={(n)=>{setmobile(n.target.value)}} required />
        </Form.Group>
     </Row>
       <Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address:</Form.Label>
        <Form.Control placeholder="Enter address" className='formfield' value={address} onChange={(n)=>{setaddress(n.target.value)}} required />
        </Form.Group>
       
        <Form.Group  onChange={(n)=>{setgender(n.target.value)}}>
        <Form.Label>Gender:</Form.Label>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="group1"
            value="Male"
            type={type}
            id={`inline-${type}-1`}  
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            value="female" 
            type={type}
            id={`inline-${type}-2`}
          />
         
        </div>
      ))}
      </Form.Group>
      </Row>
      <br></br>

      <h2> College Details</h2><br></br>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Collage Name</Form.Label>
          <Form.Control type="text" placeholder="Enter college name"className='formfield' value={cname} onChange={(n)=>{setcname(n.target.value)}} />
        </Form.Group>
      </Row>
      <Row>
         <Form.Group as={Col} controlId="formGridState" value={dname} onChange={(n)=>{setdname(n.target.value)}}>
          <Form.Label>Department</Form.Label> 
          {/* <Form.Control type="text" placeholder="choose department" className='formfield' /> */}
          <Form.Select >
            <option>Choose...</option>
            <option>Computer Engineering </option>
            <option> Information Technology </option>
            <option>Electronics & Telocommunication Engineering</option>
            <option> Mechanical Engineering</option>
            <option>Electrical Engineering</option>
            <option>Electronics & computer Engineering</option>
            <option>Civil Enginnering</option>
          </Form.Select>
          </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Passing Year</Form.Label>
          <Form.Control placeholder="Enter passing year" className='formfield' value={year} onChange={(n)=>{setyear(n.target.value)}}/>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Current CGPA</Form.Label>
          <Form.Control placeholder="Enter cgpa" className='formfield' value={cgpa} onChange={(n)=>{setcgpa(n.target.value)}}/>
        </Form.Group>
      </Row>
      <br></br>

      
      <div className="app">
      <Form.Label>Upload Resume:</Form.Label>&nbsp;
        <button
           onClick={() => { }}>
          <img src="https://www.svgrepo.com/show/12604/paper-clip.svg" height={20} width={20} />
        </button>

        <input type="file" onChange={handleChange} />

         {file.map(x => x.name).join(', ')}
        </div><br></br>

      
       
     
      <Button variant="primary" type="submit" >
        submit
      </Button>
     
    </Form>
    </div>
   </> 
  )
  
}

export default Profile;