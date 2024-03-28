import {Container,Row,Col,Breadcrumb} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CardDetailComp from './CardDetailComp';
import YearComp from '../CardSm/CardYear';
function CardDetailYear(){
    const { model } = useParams();
    const url1 = 'https://api.api-ninjas.com/v1/cars?year=';
    return(
        <div>
            <Breadcrumb style={{backgroundColor:'#608da2'}}>
      <Breadcrumb.Item  style={{color:'white',textDecoration:'none'}} href='/'><span  style={{color:'white',textDecoration:'none'}}>Home</span></Breadcrumb.Item>
      <Breadcrumb.Item  active style={{textDecoration:'none'}}>
        <span style={{color:'orange',textDecoration:'none'}}>Cars Details</span>
      </Breadcrumb.Item>
      </Breadcrumb>
 <Container>
            <Row>
                <Col>
                
                <YearComp url1={url1}  mod={model} index="4" carImageSearchQuery="bmw"/>
                </Col>
            </Row>
        </Container>
        </div>
       
            
           

            );
        }
        export default CardDetailYear;
            
        