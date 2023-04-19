import React from 'react'
import {v4 as uuidv4} from "uuid";
import Country from './Country';
import Style from './Countries.module.css';

const Countries = (props) => {
  return  <section className={Style.countries}>
    
    {props.countries.map((country) =>{
       const countryNew = {country, id: uuidv4()}
   
   return <Country {...countryNew} key={countryNew.id} 
 
   />
   })}
        </section>;
  
};
 //  onRemoveCountry = {props.onRemoveCountry}
export default Countries;