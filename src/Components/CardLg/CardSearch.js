import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
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
import CardSmComp from '../CardSm/CardSmComp';
import CardSearchDetailComp from './CardSearchDetails';
import CardSearchComp from './CardSearchComp';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


function NinjaCarSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const url1 = 'https://api.api-ninjas.com/v1/cars?';
  const imageStyle = {
    width: '1300px',
    maxHeight:'600px', // Maximum width of the image // Auto-adjusting height to maintain aspect ratio
    margin: '0 auto' // Center the image horizontally
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/cars?make=${searchQuery}&limit=4`, {
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

  const handleview = (mod) => {
    navigate('/carsearchdetails', { state: { model: mod } });
  };

  return (
    <div>
         <Container className='mb-5'>
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
    <Container className="mt-5" >
        <div style={{display:'flex',alignContent:'center',justifyContent:'space-between'}}>
        <h3>To know more use our search :</h3>
      <Form style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Row className="mb-3">
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Search for cars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Col>
          <Col sm={4}>
            <Button variant="primary" onClick={handleSearch}>Search</Button>
          </Col>
        </Row>
      </Form>
        </div>
    
      {loading ? (
        <p>Loading...</p>
      ) : (
      /*  <Row className="mt-3">
          {searchResults.map((car, index) => (
            <CardSearchComp url1={url1}  mod={car[index].model} make={car[index].make} index="0" carImageSearchQuery={car[index].make}/>
          ))}
        </Row>  */
        <Row className="mt-3">
          {searchResults.map((car, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-3">
            
              <Card style={{ width: '18rem' }}>
              {car.image && <img src={car.image} alt="Car" style={{width:'300px',height:'150px',padding:'10px'}} className="img-fluid mb-2" />}
      <Card.Body>
        <Card.Title style={{display:'flex',alignItems:'center',justifyContent:'center',textTransform:'capitalize'}}>Make: {car.make}</Card.Title>
        <Card.Text className='text-center' style={{textTransform:'capitalize'}}>
        Model: {car.model}
        </Card.Text>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button as={Link} to="/carsearchdetails" style={{backgroundColor:'#537d90',border:'none',color:'white'}}>View Details</Button>
        </div>
        
      </Card.Body>
    </Card>
            </Col>
          ))}
        </Row> 
        
      )}
    </Container>
    </div>
   
  );
}

export default NinjaCarSearch;
