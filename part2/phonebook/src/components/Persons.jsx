import { Numbers } from './Numbers'

export function Persons({persons, handleDelete}){

    return (
        <ul>
            {
                persons.map(person => (
                    <Numbers key={person.id} name={person.name} id={person.id} number={person.number} handleDelete={handleDelete}/>
                ))
            }
        </ul>
    )
}