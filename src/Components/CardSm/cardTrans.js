import {Container,Row,Col} from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardSmComp from './CardSmComp';
function CardTrans(){
    const url1 = 'https://api.api-ninjas.com/v1/cars?';
    return(
        <div>
            <Breadcrumb style={{backgroundColor:'#608da2',fontSize:'1.2rem',marginTop:'4rem'}}>
      <Breadcrumb.Item  style={{color:'white',textDecoration:'none'}} href='/'><span  style={{color:'white',textDecoration:'none'}}>Home</span></Breadcrumb.Item>
      <Breadcrumb.Item  active style={{textDecoration:'none'}}>
        <span style={{color:'gold',textDecoration:'none'}}>Cars By Transmission Type</span>
      </Breadcrumb.Item>
      </Breadcrumb>
            <Container>
        <h3 className='text-center mt-3 mb-3'>Transmission Type Automatic</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="transmission=a" index="0" carImageSearchQuery="Dodge"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="transmission=a" index="1" carImageSearchQuery="Subaru"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="transmission=a" index="2" carImageSearchQuery="Toyota"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="transmission=a" index="4" carImageSearchQuery="Volkswagen Automatic"/>
                </Col>
                </Row>
        <h3 className='text-center mt-3 mb-3'>Transmission Type Automatic</h3>
            <Row>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="transmission=m" index="0" carImageSearchQuery="Alfa Romeo"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="transmission=m" index="1" carImageSearchQuery="Ferrari"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="transmission=m" index="2" carImageSearchQuery="Dodge Durango"/>
                </Col>
                <Col className='m-2'>
                <CardSmComp url1={url1}  mod="transmission=m" index="4" carImageSearchQuery="Subaru Crosstrek"/>
                </Col>
                </Row>
        </Container>
        </div>
        );
    }
    export default CardTrans;