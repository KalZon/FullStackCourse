export function Numbers({id, name, number, handleDelete}){
    return(
        <li>
            {name} {number}
            <button onClick={() => handleDelete(id, name)}>Delete</button>
        </li>
    )
}