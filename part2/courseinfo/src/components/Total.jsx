const Total = ({exercises}) => {
    // let sumaTotal = 0
    const sumTotal = exercises.reduce((accumulator, currentValue)=>
    {
        return accumulator + currentValue.exercises
    }, 0)
    // exercises.map((exercise) => (
    //     sumaTotal += exercise.exercises
    // ))
    
    return (
            <strong>Number of exercises: {sumTotal}</strong>
        // <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    )
}

export default Total