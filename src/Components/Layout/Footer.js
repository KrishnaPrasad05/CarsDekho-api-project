import {Container,Row,Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Reddit } from 'react-bootstrap-icons';
import { Pinterest } from 'react-bootstrap-icons';
import { Wikipedia } from 'react-bootstrap-icons';
import logo from '../../Assets/Images/logo.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container fluid style={{backgroundColor:'#c8dfea',paddingTop:'20px'}}>
        <Container>
        <Row>
        <Col sm={12} md={12} xl={6} xxl={6}>
        <div style={{width:'40px',height:'40px',display:'flex'}}><h3>CarsDekho</h3> <Image src={logo} style={{marginLeft:'5px',width:'70px',height:'40px'}} rounded /></div>
        </Col>
        <Col sm={12} md={12} xl={6} xxl={6}>
        <p style={{color:'maroon',fontWeight:700,letterSpacing:'1.5px'}}>From Specs to Secrets: Unveiling the Complete Car Experience</p>
        </Col>
            
            
            
         
        </Row>
        <Row>
            <Col>
            <h6 className='lead' style={{color:'#253f4b',fontWeight:500,fontSize:'18px'}}>By Year</h6>
            <p style={{color:'#365563'}}>Before 2000</p>
            <p style={{color:'#365563'}}>Since 2000</p>
            </Col>
            <Col>
            <h6 className='lead' style={{color:'#253f4b',fontWeight:500,fontSize:'18px'}}>By Fuel Type</h6>
            <p style={{color:'#365563'}}>Gas</p>
            <p style={{color:'#365563'}}>Electric</p>
            </Col>
            <Col>
            <h6 className='lead' style={{color:'#253f4b',fontWeight:500,fontSize:'18px'}}>By Transmission</h6>
            <p style={{color:'#365563'}}>Manual</p>
            <p style={{color:'#365563'}}>Automatic</p>
            </Col>
            <Col>
            <h6 className='lead' style={{color:'#253f4b',fontWeight:500,fontSize:'18px'}}>Follow Us On</h6>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <p style={{color:'#365563'}}> <Facebook /></p>
                <p style={{color:'#365563'}}> <Instagram /></p>
                <p style={{color:'#365563'}}> <Reddit /></p>
                <p style={{color:'#365563'}}> <Pinterest /></p>
                <p style={{color:'#365563'}}> <Wikipedia /></p>
            </div>
            </Col>
        </Row>
        <Row>
            <Col>
            <p style={{color:'#253f4b'}}>&copy; Company Name | All Rights Reserved</p>
            </Col>
            <Col>
            <Container>
                <Row style={{color:'#253f4b'}}>
                    <Col ><Link style={{textDecoration:'none',color:'#253f4b'}} to="/faq"><p>FAQ</p></Link></Col>
                    <Col><Link style={{textDecoration:'none',color:'#253f4b'}} to="/contactus"><p>Contact Us</p></Link></Col>
                    <Col><p>Blogs</p></Col>
                    <Col><p>Site Map</p></Col>
                </Row>
            </Container>
            
            
            
            
          
           
            </Col>
        </Row>
        </Container>
        
    </Container>
  );
}
export default Footer;