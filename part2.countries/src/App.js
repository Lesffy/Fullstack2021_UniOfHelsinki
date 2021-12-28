import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from './components/country'


function App() {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState("");
  const [filter, setFilter] = useState(false); 
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v2/all').then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])


const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(countryFilter.toLowerCase());
  });

  const exactMatch = filteredCountries.some((country) => {
    return country.name.toLowerCase() === countryFilter.toLowerCase();
  });

  let exactFilteredCountries;
  if (exactMatch) {
    exactFilteredCountries = filteredCountries.filter((country) => {
      return country.name.toLowerCase() === countryFilter.toLowerCase()
      ;});
    }

  const handleChange = (event) => {
    setCountryFilter(event.target.value);
    if (event.target.value === "") setFilter(false);
    else setFilter(true);  
  };

  const handleClick = (event) => {
    setCountryFilter(event.target.id);
  };
    
  const Countries = ({ countries,  }) => {
    const tooManyCountries = countries.length > 10;
    const multipleCountries = countries.length > 1 && countries.length <= 10;
    const singleCountry = countries.length === 1;
    const countriesList = countries.map((country) => {
      return (
        <div key={country.alpha3Code}>
          {country.name}     
          <button onClick={handleClick} id={country.name}>
            Show
          </button>
        </div>
      );
    });
  
    return (
      <div>
        {tooManyCountries && "Too many matches, specify another filter"}
        {multipleCountries && <div>{countriesList}</div>}
        {singleCountry && <Country country={countries[0]}  />
        }
      </div>
    );
  };
  
  
  return (
    <div>
      <h1>Data For Countries</h1>
      <input onChange = {handleChange} value = {countryFilter}/>
      
      {filter && !exactMatch && (
        <Countries
          countries={filteredCountries}
          
        /> 
      )}
      
       {filter && exactMatch && (
        <Countries countries={exactFilteredCountries} />
      )} 
    </div>
  );
}

export default App