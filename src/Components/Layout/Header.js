import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';

function Header() {
  return (
    <section style={{position:'fixed',top:0,zIndex:'10000',width:'100%'}}>
    <Navbar expand="lg" style={{backgroundColor:'#c8dfea'}}>
      <Container fluid>
        <Navbar.Brand href="#">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            
         
            <h3>CarsDekho</h3>
            <div style={{width:'40px',height:'40px'}}> <Image src={logo} style={{marginLeft:'5px',width:'70px',height:'40px',marginTop:'-10px'}} rounded /></div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
       
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end ms-auto">
            <Nav.Link as={Link} to="/" style={{letterSpacing:'1px',fontFamily:'revert',fontWeight:500}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/byyear" style={{letterSpacing:'1px',fontFamily:'revert',fontWeight:500}} >By Year</Nav.Link>
            <Nav.Link as={Link} to="/byfuel" style={{letterSpacing:'1px',fontFamily:'revert',fontWeight:500}}>By Fuel Type</Nav.Link>
            <Nav.Link as={Link} to="/bytrans" style={{letterSpacing:'1px',fontFamily:'revert',fontWeight:500}}>By Transmission</Nav.Link>
           {/*  <NavDropdown title="By Year" id="basic-nav-dropdown">
              <NavDropdown.Item href="/byyear">Before 2000</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Since 2000
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="By Fuel Type" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Electricity
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="By Transmission" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Automatic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Manual
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
    
  );
}

export default Header;