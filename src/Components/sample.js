import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const PexelsAPIComponent = ({ searchQuery }) => {
  const [carImages, setCarImages] = useState([]);

  useEffect(() => {
    const fetchCarImages = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=10`,
          {
            headers: {
              Authorization: 'Your-Pexels-API-Key',
            },
          }
        );
        setCarImages(response.data.photos);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchCarImages();
  }, [searchQuery]);

  return (
    <div className="container">
      <h1>Car Images from Pexels</h1>
      <div className="row">
        {carImages.map((image) => (
          <div className="col-md-4" key={image.id}>
            <img
              src={image.src.medium}
              alt={image.photographer}
              className="img-fluid"
            />
            <p>Photographer: {image.photographer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PexelsAPIComponent;
