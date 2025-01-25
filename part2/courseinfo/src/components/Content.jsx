import { Part } from "./Part"
import Total from "./Total"

const Content = ({ejercicios}) =>{
    return (
        <>
            {/* <Part part={parts[0]} exercise={exercises[0]}></Part>
            <Part part={parts[1]} exercise={exercises[1]}></Part>
            <Part part={parts[2]} exercise={exercises[2]}></Part> */}
            <Part ejercicios={ejercicios}></Part>
            <Total exercises={ejercicios}/>
        </>
    )
}
export default Content