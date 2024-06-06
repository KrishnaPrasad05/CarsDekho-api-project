import {Container,Row,Col,Table,Image} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router';

function CardDetailComp({ url1, model, fuel, trans, year, carImageSearchQuery }) {

  const location = useLocation();
  const { mod, index } = location.state || {};
  const indexValue =`&index=${index}`;
  const url=url1+mod+indexValue;
  console.log(url)
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
    <div>
   <Card className='mt-5' style={{boxShadow:'10px 10px 30px #9EBBBB'}}>
        <Card.Header style={{backgroundColor:'#c8dfea',padding:'5px',color:'#253f4b'}}>
            <h2 className='text-center'>All Details</h2>
        </Card.Header>
      <Card.Body>
        <Container> 
            <Row style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Image src={carImage} rounded style={{width:'600px',height:'300px',padding:'20px',border:'1px solid black',borderRadius:'15px'}} className='img-fluid'/>
            </Row>
            <Row className='mt-3'>
                <Col>
                <Table >
        <tr>
          <th>Make</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].make}</td>
        </tr>
        <tr>
          <th>Model</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].model}</td>
        </tr>
        <tr>
          <th>Year</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].year}</td>
        </tr>
        <tr>
          <th>Drive</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].drive}</td>
        </tr>
        <tr>
          <th>Fuel Type</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].fuel_type}</td>
        </tr>
        <tr>
          <th>Transmission Type</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].transmission}</td>
        </tr>
        </Table>
                </Col>
                <Col>
                <Table >
        <tr>
          <th>City mpg</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].city_mpg}</td>
        </tr>
        <tr>
          <th>Combined mpg</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].combination_mpg}</td>
        </tr>
        <tr>
          <th>Cylinders</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].cylinders}</td>
        </tr>
        <tr>
          <th>Highway mpg</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].highway_mpg}</td>
        </tr>
        <tr>
          <th>Displacement</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].displacement}</td>
        </tr>
        <tr>
          <th>Class</th>
          <td style={{textTransform:'capitalize'}}>{carData && carData[index].class}</td>
        </tr>
        </Table>
                </Col>
            </Row>
        </Container>
        
        
      </Card.Body>
    </Card>
    <Container className='mt-5'>
        <h2 style={{color:'#253f4b'}}>Parameters</h2>
        <Row>
            <h4 style={{color:'maroon'}}>Drive</h4>
            <list>
                <ul style={{fontFamily:'sans-serif',fontSize:'16px',color:'#333333'}}>
                    <li><p><b>Front-Wheel Drive(FWD)</b> is a type of drivetrain configuration in which the engine's power is transmitted to the front wheels of the vehicle. In a front-wheel-drive setup, the engine is positioned transversely (sideways) in the engine bay, and the front wheels are responsible for both driving and steering the vehicle.</p></li>
                    <li><p>In <b>Rear-Wheel Drive (RWD)</b> vehicles, the engine sends power to the rear wheels. This configuration is often associated with sporty and performance-oriented cars, as it allows for better weight distribution and handling characteristics. RWD is also commonly found in trucks and larger vehicles, especially those designed for towing.</p></li>
                    <li><p>All-Wheel Drive (AWD) systems distribute power to all four wheels of the vehicle, either full-time or on-demand depending on the system. AWD provides improved traction in various road conditions and can enhance performance and stability, especially in adverse weather or off-road situations. AWD is commonly used in SUVs, crossovers, and some performance cars.</p></li>
                    <li><p><b>Four-Wheel Drive (4WD)</b> is similar to AWD but typically offers selectable drive modes for off-road use. It is commonly found in trucks and SUVs designed for rugged terrain and off-road driving. Unlike AWD systems, which often operate automatically, 4WD systems usually require the driver to manually engage them.</p></li>
                    <li><p>In this <b>Front-Engine, Front-Wheel Drive (FF) vehicles,</b> the engine is positioned in the front of the vehicle, but power is sent to the front wheels. This layout is similar to FWD but is used in vehicles with a different overall design.</p></li>
                    <li><p>In <b>Rear-Engine, Rear-Wheel Drive (RR)</b> vehicles, particularly sports cars like certain models of Porsche, the engine is located in the rear of the vehicle, and power is sent to the rear wheels. This layout offers unique handling characteristics due to the rear weight bias.</p></li>
                </ul>
            </list>
        </Row>
        <Row>
            <h4 style={{color:'maroon'}}>Fuel Type</h4>
            <list>
                <ul style={{fontFamily:'sans-serif',fontSize:'16px',color:'#333333'}}>
                    <li><p><b>Gasoline-powered cars</b> use internal combustion engines that burn gasoline as fuel. The engine ignites the gasoline-air mixture in the cylinders to produce power, which drives the vehicle. Gasoline engines are the most common type of internal combustion engines used in passenger cars around the world.</p></li>
                    <li><p><b>Diesel-powered cars</b> use internal combustion engines that burn diesel fuel. Diesel engines operate on a different combustion principle than gasoline engines, relying on compression ignition rather than spark ignition.</p></li>
                    <li><p><b>Electric cars</b>, also known as electric vehicles (EVs), use electric motors powered by rechargeable batteries to drive the vehicle. These batteries store electricity that is used to power the electric motor, which drives the wheels.</p></li>
                </ul>
            </list>
        </Row>
        <Row>
            <h4 style={{color:'maroon'}}>Transimission Type</h4>
            <list>
                <ul style={{fontFamily:'sans-serif',fontSize:'16px',color:'#333333'}}>
                    <li><p><b>Manual Transimssion</b> also known as a "stick shift" or "standard transmission," a manual transmission requires the driver to manually shift gears using a gear lever and a clutch pedal.In a manual transmission, the driver engages and disengages the engine from the transmission using the clutch pedal, allowing for smooth shifting between gears.</p></li>
                    <li><p><b>Automatic transmissions</b> do not require the driver to manually shift gears. Instead, the transmission automatically selects the appropriate gear ratio based on factors such as vehicle speed, engine load, and throttle position.Automatic transmissions use a torque converter or a dual-clutch system to transfer power from the engine to the transmission without the need for a clutch pedal.</p></li>
                </ul>
            </list>
        </Row>
        <Row>
            <h4 style={{color:'maroon'}}>City MPG</h4>
            <list>
                <ul style={{fontFamily:'sans-serif',fontSize:'16px',color:'#333333'}}>
                    <li><p><b>City MPG</b>, or "miles per gallon," is a measure of a vehicle's fuel efficiency specifically in urban driving conditions. It indicates the distance a car can travel on one gallon of fuel when driving in stop-and-go traffic, navigating lower-speed urban roads, and encountering typical city driving scenarios. Essentially, it's a metric that helps consumers understand how economical a vehicle is when used for commuting, running errands around town, or navigating through urban environments where frequent acceleration and deceleration occur.</p></li>
                </ul>
            </list>
        </Row>
        <Row>
            <h4 style={{color:'maroon'}}>Combined MPG</h4>
            <list>
                <ul style={{fontFamily:'sans-serif',fontSize:'16px',color:'#333333'}}>
                    <li><p><b>Combined MPG</b>, or "combined fuel economy," provides consumers with an overall estimate of a vehicle's fuel efficiency by considering both city and highway driving conditions. It reflects the average miles per gallon a car can achieve when driven in a combination of stop-and-go urban traffic and higher-speed highway cruising. This metric offers a more comprehensive assessment of a vehicle's real-world fuel economy performance, helping consumers make informed decisions about fuel efficiency when comparing different vehicles.</p></li>
                </ul>
            </list>
        </Row>
        <Row>
            <h4 style={{color:'maroon'}}>Highway MPG</h4>
            <list>
                <ul style={{fontFamily:'sans-serif',fontSize:'16px',color:'#333333'}}>
                    <li><p><b>Highway MPG</b>, or "miles per gallon," is a measure of a vehicle's fuel efficiency specifically in highway driving conditions. It indicates the distance a car can travel on one gallon of fuel when driving at higher speeds on highways or freeways, typically with relatively steady cruising and fewer stops compared to city driving. Highway MPG provides consumers with an estimate of a vehicle's fuel efficiency during long-distance trips or extended highway commuting, helping them understand how economical the vehicle is when driven on highways where fuel consumption tends to be lower compared to city driving.</p></li>
                </ul>
            </list>
        </Row>
        <Row>
            <h4 style={{color:'maroon'}}>Cylinders</h4>
            <list>
                <ul style={{fontFamily:'sans-serif',fontSize:'16px',color:'#333333'}}>
                    <li><p><b>Cylinders</b> in a car's engine are chambers where fuel combustion occurs. Each cylinder houses a piston that converts fuel energy into mechanical power. The number varies, with 4-cylinder engines common in compact cars, 6-cylinder in midsize vehicles, and 8-cylinder (V8) in larger or performance cars. More cylinders typically mean higher power and smoother operation but may impact fuel efficiency. Engineers balance cylinder count with factors like displacement and compression ratio for optimal performance. From compact sedans to high-performance vehicles, cylinder count influences an engine's characteristics and overall performance.</p></li>
                </ul>
            </list>
        </Row>
        <Row>
            <h4 style={{color:'maroon'}}>Displacement</h4>
            <list>
                <ul style={{fontFamily:'sans-serif',fontSize:'16px',color:'#333333'}}>
                    <li><p><b>Displacement</b> in cars refers to the total volume of all cylinders within an engine where air and fuel mixture are combusted. It's typically measured in liters (L) or cubic centimeters (cc). Engine displacement directly affects an engine's power and performance. Larger displacement engines generally produce more power and torque, providing better acceleration and towing capabilities. However, they often consume more fuel compared to smaller displacement engines. Engine displacement is a crucial factor in determining a vehicle's performance characteristics, and it's often used as a descriptor when comparing different engines or vehicle models.</p></li>
                </ul>
            </list>
        </Row>
        <Row>
            <h4 style={{color:'maroon'}}>Class</h4>
            <list>
                <ul style={{fontFamily:'sans-serif',fontSize:'16px',color:'#333333'}}>
                    <li><p><b>Class</b> typically refers to different categories or segments based on factors like size, price, features, and target market. Common classes include subcompact, compact, midsize, and full-size, with distinctions in dimensions and amenities. Luxury or premium classes offer higher-end features, materials, and performance, appealing to affluent consumers. Additionally, there are specialty classes like sports cars, SUVs, trucks, and electric vehicles, each tailored to specific preferences and needs. Car manufacturers design and market vehicles within these classes to meet diverse consumer demands, providing options ranging from practical commuting to luxurious comfort and high-performance driving experiences.</p></li>
                </ul>
            </list>
        </Row>
    </Container>
    </div>
 
  );
}

export default CardDetailComp;