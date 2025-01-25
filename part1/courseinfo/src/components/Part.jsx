export function Part({ejercicios}){
    return (
        // <p>{part} {exercise}</p>
        <div>
            {ejercicios.map((ejercicio) => (
                <p key={ejercicio.course}>
                    {ejercicio.course} {ejercicio.exercise}
                </p>
            ))}
        </div>
    )
}