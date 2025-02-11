export function UniqueCountry({country}){
    const name = country[0].name.common
    const capital = country[0].capital
    const flag = country[0].flags.png
    const alter = country[0].flags.alt
    const area = country[0].area
    const languages = Object.values(country[0].languages)
    return(
        <>
            <h1>{name}</h1>
            <p><strong>Capital:</strong> {capital}</p>
            <p><strong>Area:</strong> {area}</p>
            <h2 >Languages:</h2>
            <ul>
                {
                    languages.map((language)=>(
                        <li key={language}>
                            {language}
                        </li>
                    ))
                }
            </ul>
            <img src={flag} alt={alter} />
        </>
    )
}