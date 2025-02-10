export function Countries({paises}){
    return(
        <ul>
            {paises.length > 0 
            ? (
                paises.map(country => (
                    <li key={country.cca3}>
                    {country.name.common}
                    </li>
                ))
            ) 
            : (<p>Loading...</p>)
            }
        </ul>
    )
}