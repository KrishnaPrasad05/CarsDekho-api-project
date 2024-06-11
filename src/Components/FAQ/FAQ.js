import { Breadcrumb, Container, Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import '../Accordian.css';
import { useEffect } from 'react';
import TopButton from '../TopButton';

function FaqEmp() {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
   
    <div style={{marginTop:'4rem'}}>
     
<Breadcrumb style={{backgroundColor:'#608da0',fontSize:'16px'}}>
      <Breadcrumb.Item active><Link to="/" style={{color:'#c8dfea',textDecoration:'none'}}>Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item  active style={{textDecoration:'none'}}>
        <span style={{color:'white',textDecoration:'none'}}>FAQ</span>
      </Breadcrumb.Item>
      </Breadcrumb>
      <Container style={{marginBottom:'6.5rem'}}>
      
      <h1 style={{color:'#253f4b',marginTop:'2rem',textAlign:'center'}}>FAQ </h1>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" style={{backgroundColor:'white'}}>
        <Accordion.Header >1. What information can I find about cars on this website?</Accordion.Header>
        <Accordion.Body >
          <p>You can find detailed information about various cars, including their make, model, year, engine specifications, fuel type, mileage, and features. This information is designed to help you make informed decisions about different car models.</p>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{backgroundColor:'white'}}>
        <Accordion.Header>2. Is the car information on this website up-to-date?</Accordion.Header>
        <Accordion.Body>
          <p> Yes, the car information on our website is fetched from a reliable API that is regularly updated. This ensures that you have access to the latest details about each car.</p>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{backgroundColor:'white'}}>
        <Accordion.Header>3. Do I need to pay to access the car details on this website?</Accordion.Header>
        <Accordion.Body>
          <p>No, accessing car details on our website is completely free. You can browse and search for car information without any charges.</p>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" style={{backgroundColor:'white'}}>
        <Accordion.Header>4. What should I do if I can't find information about a specific car?</Accordion.Header>
        <Accordion.Body>
          <p> If you can't find details about a specific car, please try checking the spelling or search parameters. If the problem persists, it might be due to limitations in the API data we use. You can contact us through the feedback form for further assistance.</p>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" >
        <Accordion.Header>5. Can I see car details on my mobile device?</Accordion.Header>
        <Accordion.Body>
          <p>Yes, our website is fully responsive and optimized for mobile devices. You can easily access and view car details on your smartphone or tablet, providing a seamless browsing experience no matter where you are.</p>
       
        </Accordion.Body>
      </Accordion.Item>
     
     
    </Accordion>
    </Container>
    </div>
   
    
  );
}

export default FaqEmp;