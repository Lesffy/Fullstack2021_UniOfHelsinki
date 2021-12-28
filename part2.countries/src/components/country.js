import React from 'react'
import Weather from './components/weather'
const Language = ({props }) => {
    return (
      <div> {props.languages.map((language) => {
        return ( <li key =  {language.iso639_1}> {language.name} </li>) 
      })}  </div>
    )
  }
  const Country = ({ country}) => {
    return (
      <div>
        <h2>{country.name}</h2>
        <p> {country.capital} </p>
        <p> {country.subregion} </p>
        < Language  props ={country} /> 
        <p>
          <img key = {country.flag} alt={"Country Flag"} width={"100px"} src={country.flag}></img>
        </p>
        <Weather props={country.capital} />
      </div>
    );
  };

export default Country