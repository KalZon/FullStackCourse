import Header from "./Header";
import Content from "./Content";

export function Course({course}){
    return (
        <>
            <Header curso={course.name}/>
            <Content ejercicios={course.parts}></Content>
        </>
    )
}