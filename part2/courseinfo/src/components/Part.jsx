export function Part({ejercicios}){
    return (
        // <p>{part} {exercise}</p>
        <div>
            {ejercicios.map((ejercicio) => (
                <p key={ejercicio.id}>
                    {ejercicio.name} {ejercicio.exercises}
                </p>
            ))}
        </div>
    )
}