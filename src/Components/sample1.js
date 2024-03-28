import React from 'react';
import ReactDOM from 'react-dom';
import PexelsAPIComponent from './sample';


const Sample1 = () => {
  return (
    <div>
      <h1>Search Car Images</h1>
     
      <PexelsAPIComponent searchQuery="boy" />
    </div>
  );
};

export default Sample1;
