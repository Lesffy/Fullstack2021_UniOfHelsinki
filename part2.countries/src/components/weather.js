import React, {useState, useEffect } from 'react'
import axios from "axios";
const Weather = ({props}) => {  
  
    const [weather, setWeather] = useState({
      
    });
 
  useEffect(() => {
    console.log('effect')
    axios
    .get('http://api.openweathermap.org/data/2.5/weather?q={props}&appid=cd8edb3ba809d19160c9b71ee49acf20')
    .then(response => {
      console.log(response.data)
    
      setWeather(response.data);    
     
    });
}, [props])

return (
  <div>
    <h2>Weather in {props}</h2>
   
    { weather.main}
    {weather.wind}
    
  </div>
);
};
export default Weather