import React from "react";


/*const CityList = () => {
    return (
        <ul><p>Cities :</p>
            <li>Toronto</li>
            
            <li>Sidney</li>
            <li>London</li>
        </ul>
    );
};

export default CityList;*/


const CityList = () => {
    const cities = ['Roma', 'Parigi', 'New York'];
  
    return (
      <div>
        <h2>Lista di Città</h2>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CityList;