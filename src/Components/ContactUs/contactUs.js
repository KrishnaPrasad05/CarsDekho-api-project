import { Form, Button, Modal, Breadcrumb } from 'react-bootstrap';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import image from '../../Assets/Images/contactUs.jpg';
import { Link } from 'react-router-dom';
function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        lang: '',
        email: ''
      });
    
      const [formErrors, setFormErrors] = useState({
        name: '',
        lang: '',
        email: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const [showSuccessModal, setShowSuccessModal] = useState(false);
      const handleCloseSuccessModal = () => setShowSuccessModal(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name, lang, email } = formData;
        let errors = {};
    
        if (name.trim() === '') {
          errors.name = 'Name is required';
        } else if (!/^[a-zA-Z ]+$/.test(name)) {
          errors.name = 'Name is invalid';
        }
    
        if (lang.trim() === '') {
          errors.lang = 'Query is required';
        }
    
        if (email.trim() === '') {
          errors.email = 'Email Address is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Invalid email address';
        }
    
        if (Object.keys(errors).length === 0) {
          // Form is valid, perform further actions here
          console.log('Form data:', formData);
          setShowSuccessModal(true);
          setFormData({
            name: '',
            lang: '',
            email: ''
          });
        } else {
          setFormErrors(errors);
        }
      };
  return (
    <section style={{marginBottom:'3rem',marginTop:'4rem'}}>
      <Breadcrumb style={{backgroundColor:'#608da0',fontSize:'16px'}}>
      <Breadcrumb.Item active><Link to="/" style={{color:'#c8dfea',textDecoration:'none'}}>Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item  active style={{textDecoration:'none'}}>
        <span style={{color:'white',textDecoration:'none'}}>Contact Us</span>
      </Breadcrumb.Item>
      </Breadcrumb>
 <Container className='mt-5 mb-5' style={{backgroundColor:'#c8dfea',borderRadius:'10px'}}>
        <Row className='pt-5 pb-5' xs={1} md={2}>
        <Col >
        <h3 style={{color: '#253f4b'}}>Feel free to connect with us,</h3>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name" className='mb-3'>
        <Form.Label>Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!formErrors.name}
        />
        <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
      </Form.Group>

      

      <Form.Group controlId="email" className='mb-3'>
        <Form.Label>Email Address<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!formErrors.email}
        />
        <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="lang" className='mb-3'>
        <Form.Label>Query to be answered<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          as="textarea" rows={3}
         
          name="lang"
          value={formData.lang}
          onChange={handleChange}
          isInvalid={!!formErrors.lang} style={{resize:'none'}}
        />
        <Form.Control.Feedback type="invalid">{formErrors.lang}</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className='mb-3' style={{backgroundColor:'#253f4b',border:'none'}}>Submit</Button>
    </Form>
        </Col>
        <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Image src={image} rounded fluid width={'400px'} height={'600px'}/>
        </Col>
        </Row>
    </Container>



    <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Form Submitted Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your form has been submitted successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
   
   
  );
}

export default ContactUs;