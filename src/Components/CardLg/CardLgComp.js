import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ListGroup,Table } from 'react-bootstrap';

function CardLgComp({ url1, model, fuel, trans, year, index, carImageSearchQuery,mod }) {
  const url=url1+mod;
  const [carData, setCarData] = useState(null);
  const [carImage, setCarImage] = useState('');
  const navigate = useNavigate();
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
  const handleViewDetails = () => {
    navigate('/cardetails', { state: { mod: mod, index: index,carImageSearchQuery:carImageSearchQuery } });
  };

  return (
    <div>
 <Card style={{ width: '18rem',borderColor:'#253f4b' }}>
      <Card.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#c8dfea' }}>
        <Card.Title style={{textTransform:'capitalize'}}>{carData && carData[index].make}</Card.Title>
      </Card.Header>
      <Card.Img variant="top" src={carImage} alt="Car Image" style={{height:'200px',padding:'5px'}}/>
      <Card.Body>
        <Card.Text style={{textTransform:'capitalize',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <span style={{color:'darkBlue',fontWeight:600,fontSize:'18px',marginRight:'3px'}}>Model : </span> {carData && carData[index].model}
        </Card.Text>
      </Card.Body>
     
          <Table >
          <tr>
          <th><span style={{color:'maroon',fontWeight:600,fontSize:'18px'}}>Fuel Type</span></th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].fuel_type}</td>
        </tr>
         
        
          
          <tr>
          <th><span style={{color:'maroon',fontWeight:600,fontSize:'18px'}}>Year</span></th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].year}</td>
        </tr>
          
         
        
          <tr>
          <th><span style={{color:'maroon',fontWeight:600,fontSize:'18px'}}>Transmission Type</span></th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].transmission}</td>
        </tr>
          </Table>
         
      <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button 
      onClick={handleViewDetails} 
      style={{ backgroundColor: '#537d90', border: 'none', color: 'white' }}
    >
      View Details
    </Button>

      </Card.Body>
     
    </Card>
    
    </div>
   
  );
}

export default CardLgComp;
