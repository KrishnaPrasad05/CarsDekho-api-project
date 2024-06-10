import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardSmComp from './CardSmComp';
import { useEffect } from 'react';
function CardYear(){
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    const url1 = 'https://api.api-ninjas.com/v1/cars?';
    return(
        <div style={{marginTop:'4rem'}}>
            <Breadcrumb style={{backgroundColor:'#608da0',fontSize:'16px'}}>
      <Breadcrumb.Item active><Link to="/" style={{color:'#c8dfea',textDecoration:'none'}}>Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item  active style={{textDecoration:'none'}}>
        <span style={{color:'white',textDecoration:'none'}}>Cars By Year</span>
      </Breadcrumb.Item>
      
    </Breadcrumb>
            <Container className='mb-5'>
            <h3 className='text-center mt-3 mb-3 fs-2' style={{color:'#be5504'}}>Popular Cars (1990-1995)</h3>
            <Row>
                <Col className='m-2'  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=1992" index="0" carImageSearchQuery="autokraft limited"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=1993" index="1" carImageSearchQuery="subaru"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=1994" index="2" carImageSearchQuery="alfa romeo spider"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=1995" index="4" carImageSearchQuery="chevrolet corvette"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3 fs-2' style={{color:'#be5504'}}>Popular Cars (1995-2000)</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=1999" index="3" carImageSearchQuery="bmw m roadster"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=1996" index="1" carImageSearchQuery="acura nsx"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=1997" index="2" carImageSearchQuery="ferrari"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=1998" index="4" carImageSearchQuery="aston martin volante"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3 fs-2' style={{color:'#be5504'}}>Popular Cars (2000-2005)</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2000" index="3" carImageSearchQuery="bmw z3 coupe"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2005" index="3" carImageSearchQuery="audi tt roadster quattro"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2002" index="2" carImageSearchQuery="aston martin vanquish"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2001" index="4" carImageSearchQuery="bmw m coupe"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3 fs-2' style={{color:'#be5504'}}>Popular Cars (2005-2010)</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2006" index="3" carImageSearchQuery="cadillac xlr"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2007" index="3" carImageSearchQuery="mercedes-benz sl550"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2010" index="2" carImageSearchQuery="jaguar  xk convertible"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2009" index="4" carImageSearchQuery="mercedes-benz automatic"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3 fs-2' style={{color:'#be5504'}}>Popular Cars (2010-2015)</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2011" index="3" carImageSearchQuery="bmw z4 sdrive35i"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2012" index="3" carImageSearchQuery="audi r8 spyder"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2013" index="2" carImageSearchQuery="volkswagen "/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2014" index="4" carImageSearchQuery="mazda cx-5 2wd"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3 fs-2' style={{color:'#be5504'}}>Popular Cars (2015-2020)</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2016" index="3" carImageSearchQuery="kia sorento fe awd"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2017" index="3" carImageSearchQuery="hyundai santa fe sport ultimate awd"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2018" index="2" carImageSearchQuery="audi a5 cabriolet quattro"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2019" index="4" carImageSearchQuery="chevrolet"/>
                </Col>
            </Row>
            <h3 className='text-center mt-3 mb-3 fs-2' style={{color:'#be5504'}}>Popular Cars (2020-Now)</h3>
            <Row>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2020" index="3" carImageSearchQuery="toyota"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2021" index="3" carImageSearchQuery="jaguar coupe"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2022" index="2" carImageSearchQuery="kia stinger rwd"/>
                </Col>
                <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CardSmComp url1={url1}  mod="year=2020" index="4" carImageSearchQuery="toyota"/>
                </Col>
            </Row>
        </Container>
        </div>
        );
    }
    export default CardYear;