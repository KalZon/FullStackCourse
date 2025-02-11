
import { UniqueCountry } from "./UniqueContry"
import { CountryData } from "./CountryData"

export function Countries({paises}){
    
    return(
        <>
            {paises.length > 0 
            ? (
                paises.map(country => (
                    <CountryData key={country.cca3} pais={country}/>
                ))
            ) 
            : (<p>Loading...</p>)
            }
        </>
    )
}