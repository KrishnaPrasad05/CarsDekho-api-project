import {Container,Row,Col} from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardSmComp from './CardSmComp';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function CardTrans(){
    const url1 = 'https://api.api-ninjas.com/v1/cars?';
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    return(
        <div style={{marginTop:'4rem'}}>
             <Breadcrumb style={{backgroundColor:'#608da0',fontSize:'16px'}}>
      <Breadcrumb.Item active><Link to="/" style={{color:'#c8dfea',textDecoration:'none'}}>Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item  active style={{textDecoration:'none'}}>
        <span style={{color:'white',textDecoration:'none'}}>Cars By Transmission Type</span>
      </Breadcrumb.Item>
      </Breadcrumb>
            <Container>
        <h3 className='text-center mt-3 mb-3' style={{color:'#be5504'}}>Transmission Type Automatic</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="transmission=a" index="0" carImageSearchQuery="Dodge"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="transmission=a" index="1" carImageSearchQuery="Subaru"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="transmission=a" index="2" carImageSearchQuery="Toyota"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="transmission=a" index="4" carImageSearchQuery="Volkswagen Automatic"/>
                </Col>
                </Row>
        <h3 className='text-center mt-3 mb-3' style={{color:'#be5504'}}>Transmission Type Automatic</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="transmission=m" index="0" carImageSearchQuery="Alfa Romeo"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="transmission=m" index="1" carImageSearchQuery="Ferrari"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="transmission=m" index="2" carImageSearchQuery="Dodge Durango"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="transmission=m" index="4" carImageSearchQuery="Subaru Crosstrek"/>
                </Col>
                </Row>
        </Container>
        </div>
        );
    }
    export default CardTrans;