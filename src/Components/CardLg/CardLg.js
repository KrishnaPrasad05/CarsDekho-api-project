import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ListGroup, Container, Row, Col,Form } from 'react-bootstrap';
import CardLgComp from './CardLgComp';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../../Assets/Images/carImage.jpg';
import ExampleCarouselImage2 from '../../Assets/Images/carImage1.jpg';
import ExampleCarouselImage3 from '../../Assets/Images/carImage2.jpg';
import ExampleCarouselImage4 from '../../Assets/Images/carImage3.webp';
import ExampleCarouselImage5 from '../../Assets/Images/carImage4.jpg';
import ExampleCarouselImage6 from '../../Assets/Images/carImage5.jpg';
import ExampleCarouselImage7 from '../../Assets/Images/carImage6.jpg';
import ExampleCarouselImage8 from '../../Assets/Images/carImage7.jpg';
import ExampleCarouselImage9 from '../../Assets/Images/carImage8.jpg';
import ExampleCarouselImage10 from '../../Assets/Images/carImage9.webp';

function CardLg() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const imageStyle = {
    width: '1300px',
    maxHeight:'600px', // Maximum width of the image // Auto-adjusting height to maintain aspect ratio
    margin: '0 auto' // Center the image horizontally
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/cars?make=${searchQuery}&limit=10`, {
        headers: { 'x-api-key': 'KcH0p5y3nm2N4tqJFfr1Vj4NLEXuEbGytNTq7rNf' } // Replace with your actual API key
      });
      const cars = response.data;
      const updatedCars = await Promise.all(cars.map(async (car) => {
        const carImageResponse = await fetchCarImage(searchQuery);
        return {
          ...car,
          image: carImageResponse,
        };
      }));
      setSearchResults(updatedCars);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
    setLoading(false);
  };

  const fetchCarImage = async (query) => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=1&page=${Math.floor(Math.random() * 10) + 1}`, {
        headers: { 'Authorization': 'YpkmDQ8PDR3I3ml8Jlco6yuUejeGP4TGcK5aHij1ry6oFHv4jH6VX5XH' }
      });
      if (response.data.photos.length > 0) {
        return response.data.photos[0].src.medium;
      }
    } catch (error) {
      console.error('Error fetching car image:', error);
    }
    return ''; // Return empty string if no image found
  };

    const url1 = 'https://api.api-ninjas.com/v1/cars?';
   
    const handleview = (mod,make) => {
      navigate('/carsearchdetails', { state: { model: mod,make:make } });
    };
  
    return (
        <div>
           <div>
         <Container style={{marginTop:'5rem'}}>
         <Carousel style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px'}} controls={false} indicators={false}>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage1} className='img-fluid rounded' style={imageStyle} alt="First slide" />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage2} className='img-fluid rounded' style={imageStyle} alt="Second slide" />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage3} className='img-fluid rounded' style={imageStyle} alt="Third slide" />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage4} className='img-fluid rounded' style={imageStyle} alt="First slide" />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage5} className='img-fluid rounded' style={imageStyle} alt="Second slide" />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage6} className='img-fluid rounded' style={imageStyle} alt="Third slide" />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage7} className='img-fluid rounded' style={imageStyle} alt="Second slide" />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage8} className='img-fluid rounded' style={imageStyle} alt="Third slide" />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage9} className='img-fluid rounded' style={imageStyle} alt="Second slide" />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ExampleCarouselImage10} className='img-fluid rounded' style={imageStyle} alt="Third slide" />
        
      </Carousel.Item>
    </Carousel>

    </Container>
    <Container >
        
          <Row>
            <Col sm={12} xxl={6} md={6}>
            <h3 className='text-center'>To know more use our search :</h3>
            </Col>
            <Col sm={12} xxl={6} md={6}>
            <Row className="mb-3" sm={12} >
            <Form  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
       
          <Col sm={6} md={6} >
            <Form.Control
              type="text"
              placeholder="Search for cars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} style={{border:'1px solid black'}}
            />
          </Col>
          <Col sm={6} md={6}>
            <Button variant="primary" onClick={handleSearch} style={{backgroundColor:'#537d90',border:'none',color:'white',marginLeft:'5px'}}>Search</Button>
          </Col>
          </Form>
        </Row>
      
            </Col>
           
          </Row>
       
     
       
    
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row className="mt-3">
          {searchResults.map((car, index) => (
            <Col key={index} sm={12} md={6} lg={4} xxl={3} className="mb-3" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
             {/*  <Card>
                <Card.Body>
                  <Card.Title>{car.make}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Model: {car.model}</Card.Subtitle>
                  <Card.Text>
                    Year: {car.year}<br />
                    Fuel Type: {car.fuel_type}<br />
                    Transmission: {car.transmission}
                  </Card.Text>
                  {car.image && <img src={car.image} alt="Car" style={{width:'300px',height:'150px'}} className="img-fluid mb-2" />}
                  <Button variant="primary">See Details</Button>
                </Card.Body>
              </Card> */}
              <Card style={{ width: '18rem' }}>
              {car.image && <img src={car.image} alt="Car" style={{width:'300px',height:'150px',padding:'10px'}} className="img-fluid mb-2" />}
      <Card.Body>
        <Card.Title style={{display:'flex',alignItems:'center',justifyContent:'center',textTransform:'capitalize'}}>Make: {car.make}</Card.Title>
        <Card.Text className='text-center' style={{textTransform:'capitalize'}}>
        Model: {car.model}
        </Card.Text>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button style={{backgroundColor:'#537d90',border:'none',color:'white'}} onClick={()=>handleview(car.model,car.make)}>View Details</Button>
        </div>
        
      </Card.Body>
    </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
    </div>
<Container className='mt-5 mb-5' >
        <h1 className='mt-5 mb-5 text-center w-100' style={{backgroundColor:'#537d90',color:'white',borderRadius:'10px',padding:'5px'}}>Cars by Year</h1>
        <Row >
          <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <CardLgComp url1={url1}  mod="year=1998" index="0" carImageSearchQuery="acura nsx"/>
          </Col>
           <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <CardLgComp  url1={url1} mod="year=1998"  index="1" carImageSearchQuery="acura"/>
          </Col>
          
          <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <CardLgComp url1={url1} mod="year=1998"  index="2" carImageSearchQuery="aston martin coupe"/>
          </Col>
          <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <CardLgComp url1={url1} mod="year=1998"  index="4" carImageSearchQuery="aston martin" />
          </Col> 
        </Row>
        <div className='mt-5' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     <Button as={Link} to="/byyear" style={{ backgroundColor: 'maroon', border: 'none', color: 'white' }}>Explore Cars</Button>
     </div>
      </Container>
      <Container className='mt-5 mb-5'>
      <h1 className='mt-5 mb-5 text-center' style={{backgroundColor:'#537d90',color:'white',borderRadius:'10px',padding:'5px'}}>Cars by Fuel Type</h1>
      <Row>
        <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        
          <CardLgComp url1={url1}  mod="fuel_type=gas" index="0" carImageSearchQuery="alfa romeo spider veloce 2000"/>
        </Col>
         <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <CardLgComp  url1={url1} mod="fuel_type=gas"  index="1" carImageSearchQuery="ferrari testarossa"/>
        </Col>
        
        <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <CardLgComp url1={url1} mod="fuel_type=diesel"  index="2" carImageSearchQuery="Gmc G15/25 Rally"/>
        </Col>
        <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <CardLgComp url1={url1} mod="fuel_type=diesel"  index="4" carImageSearchQuery="Chevrolet Pickup 2500 " />
        </Col> 
      </Row>
      <div className='mt-5' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     <Button style={{ backgroundColor: 'maroon', border: 'none', color: 'white' }}>Explore Cars</Button>
     </div>
    </Container>

    <Container className='mt-5 mb-5'>
    <h1 className='mt-5 mb-5 text-center' style={{backgroundColor:'#537d90',color:'white',borderRadius:'10px',padding:'5px'}}>Cars by Transimission</h1>
      <Row>
        <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        
          <CardLgComp url1={url1}  mod="transmission=a" index="0" carImageSearchQuery="Dodge"/>
        </Col>
         <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <CardLgComp  url1={url1} mod="transmission=a"  index="4" carImageSearchQuery="Volkswagen Golf"/>
        </Col>
        
        <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <CardLgComp url1={url1} mod="transmission=m"  index="2" carImageSearchQuery="Dodge Charger"/>
        </Col>
        <Col className='m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <CardLgComp url1={url1} mod="transmission=m"  index="3" carImageSearchQuery="Subaru" />
        </Col> 
      </Row>
      <div className='mt-5' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     <Button style={{ backgroundColor: 'maroon', border: 'none', color: 'white' }}>Explore Cars</Button>
     </div>
    </Container>
        </div>
      
    );
  }
  
  export default CardLg;