import { useState, useEffect } from 'react';
import countriesService from './services/countries';
import { Countries } from './components/Countries';
import { UniqueCountry } from './components/UniqueContry';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    countriesService.getAll()
      .then(initialCountries => setCountries(initialCountries))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <label>
        Find countries:
        <input 
          type="text" 
          value={filter} 
          onChange={handleFilterChange} 
        />
      </label>
      {filteredCountries.length == 1 ? (
        <UniqueCountry country={filteredCountries}/>
      ): filteredCountries.length <= 10 ? (
        <Countries paises={filteredCountries}/>
      ): <p>Too many matches</p>
      }
    </>
  );
}

export default App;
