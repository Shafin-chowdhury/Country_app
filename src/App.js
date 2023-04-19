
import './App.css';

import React,{useState,useEffect} from 'react'
// import Countries from './component/countries';
import Search from './component/Search';
import Countries from './component/Countries';
const url = "https://restcountries.com/v3.1/all"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const fetchData = async(url) => {
    setIsLoading(true);
   try {
    const response = await fetch(url);
    const data = await response.json();
    setFilteredCountries(data);
    setCountries(data);
    setIsLoading(false);
    setError(null);
   

   } catch (error) {
    setIsLoading(false);
    setError(error);
    

   }
  };

  useEffect(() => {
fetchData(url);
  },
     []);

     const handleRemoveCountry = (name) => {
     const filter = filteredCountries.filter((country)
     => {
         return country.name.common != name;
       });
     setFilteredCountries(filter);
     };


  const handleSearch = (searchValue) =>{
    let value = searchValue.toLowerCase();
     const newCountries = countries.filter((country) =>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
     });

     countries(newCountries);
  }
  return (
    <>
    <h1>Country App</h1>
    <Search onSearch = {handleSearch} />
    {isLoading && <h2>Loading...</h2>}
    {error && <h2>{error.message}</h2>}
    {countries &&
    //  <Countries countries = {countries}
   < Countries countries = {filteredCountries}/>
    // onRemoveCountry={handleRemoveCountry}
  }
    
    </>
  )
}

export default App;
