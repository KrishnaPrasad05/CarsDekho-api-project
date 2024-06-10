import {Container,Row,Col} from 'react-bootstrap';
import CardSmComp from './CardSmComp';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CardFuel(){
    const url1 = 'https://api.api-ninjas.com/v1/cars?';
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    return(
        <div style={{marginTop:'4rem'}}>
             <Breadcrumb style={{backgroundColor:'#608da0',fontSize:'16px'}}>
      <Breadcrumb.Item active><Link to="/" style={{color:'#c8dfea',textDecoration:'none'}}>Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item  active style={{textDecoration:'none'}}>
        <span style={{color:'white',textDecoration:'none'}}>Cars By Fuel Type</span>
      </Breadcrumb.Item>
      </Breadcrumb>
            <Container>
        <h3 className='text-center mt-3 mb-3' style={{color:'#be5504'}}>Fuel Type Gas</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=gas" index="0" carImageSearchQuery="Alfa Romeo"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=gas" index="1" carImageSearchQuery="Ferrari Testarossa"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=gas" index="2" carImageSearchQuery="Dodge Charger"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=gas" index="3" carImageSearchQuery="Dodge"/>
                </Col>
               
               
            </Row>
        <h3 className='text-center mt-3 mb-3' style={{color:'#be5504'}}>Fuel Type Diesel</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=diesel" index="0" carImageSearchQuery="Mercedes-Benz"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=diesel" index="1" carImageSearchQuery="Gmc"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=diesel" index="4" carImageSearchQuery="Chevrolet"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=diesel" index="3" carImageSearchQuery="Chevrolet automatic"/>
                </Col>
               
               
            </Row>
        <h3 className='text-center mt-3 mb-3' style={{color:'#be5504'}}>Fuel Type Electricity</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=electricity" index="0" carImageSearchQuery="Nissan"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=electricity" index="1" carImageSearchQuery="Toyota"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=electricity" index="4" carImageSearchQuery="Ford Bronco"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="fuel_type=electricity" index="3" carImageSearchQuery="Ford Th!Nk"/>
                </Col>
               
               
            </Row>
        </Container> 
        </div>

        );
    }
    export default CardFuel;