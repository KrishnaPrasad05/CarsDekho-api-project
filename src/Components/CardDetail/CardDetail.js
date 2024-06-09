import {Container,Row,Col,Breadcrumb} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CardDetailComp from './CardDetailComp';
function CardDetail(){
    const { model } = useParams();
    const url1 = 'https://api.api-ninjas.com/v1/cars?';
    return(
        <div>
            <Breadcrumb style={{backgroundColor:'#608da2',fontSize:'14px'}}>
      <Breadcrumb.Item  style={{color:'white',textDecoration:'none'}} href='/'><span  style={{color:'white',textDecoration:'none'}}>Home</span></Breadcrumb.Item>
      <Breadcrumb.Item  active style={{textDecoration:'none'}}>
        <span style={{color:'#be5504',textDecoration:'none'}}>Cars Details</span>
      </Breadcrumb.Item>
      </Breadcrumb>
 <Container>
            <Row>
                <Col>
                <CardDetailComp url1={url1}  mod={model} index="4" carImageSearchQuery="bmw"/>
                </Col>
            </Row>
        </Container>
        </div>
       
            
           

            );
        }
        export default CardDetail;
            
        