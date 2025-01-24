const Total = ({exercises}) => {
    let sumaTotal = 0
    {exercises.map((exercise) => (
        sumaTotal += exercise.exercise
    ))}
    
    return (
        <div>
            
            <p>Number of exercises {sumaTotal}</p>
        </div>
        // <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    )
}

export default Total