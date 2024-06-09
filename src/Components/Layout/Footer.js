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
        <Row style={{marginBottom:'10px'}}>
        <Col sm={12} md={12} lg={6} xl={6} xxl={6} >
        <div style={{width:'40px',height:'40px',display:'flex'}}><h3>CarsDekho</h3> <Image src={logo} style={{marginLeft:'5px',width:'70px',height:'40px'}} rounded /></div>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} xxl={6} >
        <p style={{color:'#be5504',fontWeight:700,letterSpacing:'1.5px'}}>From Specs to Secrets: Unveiling the Complete Car Experience</p>
        </Col>
            
            
            
         
        </Row>
        <Row>
            <Col sm={12} md={6} lg={6} xl={3} xxl={3} >
            <h6 className='lead' style={{color:'#253f4b',fontWeight:500,fontSize:'18px'}}>By Year</h6>
            <p><Link style={{textDecoration:'none',color:'#365563'}} to="/byyear">Before 2000</Link></p>
            <p style={{color:'#365563'}}><Link style={{textDecoration:'none',color:'#365563'}} to="/byyear">Since 2000</Link></p>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3} xxl={3}>
            <h6 className='lead' style={{color:'#253f4b',fontWeight:500,fontSize:'18px'}}>By Fuel Type</h6>
            <p style={{color:'#365563'}}><Link style={{textDecoration:'none',color:'#365563'}} to="/byfuel">Gas</Link></p>
            <p style={{color:'#365563'}}><Link style={{textDecoration:'none',color:'#365563'}} to="/byfuel">Electric</Link></p>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3} xxl={3}>
            <h6 className='lead' style={{color:'#253f4b',fontWeight:500,fontSize:'18px'}}>By Transmission</h6>
            <p style={{color:'#365563'}}><Link style={{textDecoration:'none',color:'#365563'}} to="/bytrans">Manual</Link></p>
            <p style={{color:'#365563'}}><Link style={{textDecoration:'none',color:'#365563'}} to="/bytrans">Automatic</Link></p>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3} xxl={3}>
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
            <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
            <p style={{color:'#253f4b',fontSize:'15px',textAlign:'center'}}>&copy;2024 CarsDekho | All Rights Reserved</p>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
            <Container fluid>
                <Row style={{color:'#253f4b',fontSize:'15px'}}>
                    <Col><Link style={{textDecoration:'none',color:'#253f4b'}} to="/faq"><p>FAQ</p></Link></Col>
                    <Col><Link style={{textDecoration:'none',color:'#253f4b'}} to="/contactus"><p>Contact Us</p></Link></Col>
                    <Col><p>Blogs</p></Col>
                    <Col><p>Site Map</p></Col>
                </Row>
            </Container>
            
            
            
            
          
           
            </Col>
        </Row>
        <Row>
            
            <Col  className='text-center' style={{color:'#253f4b'}}>Developed by<a style={{textAlign:'center',color:'#be5504',marginLeft:'5px'}} href="https://www.linkedin.com/in/krishnaprasad-srinivasan/" target='blank'>KRISHNA PRASAD S</a></Col>
        </Row>
        </Container>
        
    </Container>
  );
}
export default Footer;