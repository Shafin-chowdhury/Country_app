import React from 'react'
import Style from './Country.module.css'

const Country = (props) => {
   
    const {name, flags,capital, population, area} = props.country;
 
 const handleRemoveCountry= (name) => {
  props.onRemoveCountry(name);
 };
    return (
    <article className= {Style.country}>
        <div>
            <img src={flags.png} alt = {name.common} className={Style.flags}/>
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            {/* <button className={Style.btn} onClick={()=> {
              handleRemoveCountry(name.common)
          }}>Remove Country</button> */}
        </div>

        
    </article>
  )
}

export default Country