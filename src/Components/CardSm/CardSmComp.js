import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ListGroup } from 'react-bootstrap';

function CardSmComp({ url1, model, fuel, trans, year, index, carImageSearchQuery,mod }) {
  const url=url1+mod;
  const [carData, setCarData] = useState(null);
  const [carImage, setCarImage] = useState('');
console.log(url)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: { 'x-api-key': 'KcH0p5y3nm2N4tqJFfr1Vj4NLEXuEbGytNTq7rNf' }
        };
        const response = await axios.get(url, options);
        setCarData(response.data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    const fetchCarImage = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${carImageSearchQuery}&per_page=1`,
          {
            headers: {
              Authorization: 'YpkmDQ8PDR3I3ml8Jlco6yuUejeGP4TGcK5aHij1ry6oFHv4jH6VX5XH',
            },
          }
        );
        if (response.data.photos.length > 0) {
          setCarImage(response.data.photos[0].src.medium);
        }
      } catch (error) {
        console.error('Error fetching car image:', error);
      }
    };

    fetchData();
    fetchCarImage();
  }, [url, carImageSearchQuery]);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={carImage} alt="Car Image" style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title style={{display:'flex',alignItems:'center',justifyContent:'center',textTransform:'capitalize'}}>Make: {carData && carData[index].make}</Card.Title>
        <Card.Text className='text-center' style={{textTransform:'capitalize'}}>
        Model: {carData && carData[index].model}
        </Card.Text>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button as={Link} to="/cardetails" style={{backgroundColor:'#537d90',border:'none',color:'white'}}>View Details</Button>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default CardSmComp;