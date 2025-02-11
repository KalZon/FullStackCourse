import { UniqueCountry } from "./UniqueContry"
import { useState } from "react"

export function CountryData({pais}){
    const [show, setShow] = useState(false)
    const message = show ? 'hide' : 'show'
    
    return(
        <p style={{marginBottom:10 }}>
            {pais.name.common}
            <button
                style={{marginLeft:5}}
                onClick={()=>{setShow(!show)}}
            >{message}</button>
            {show && <UniqueCountry country={[pais]}/>}
        </p>
    )
}