
export function PersonForm({addPerson, newName, newNumber, handleNameChange, handleNumberChange}){

    return (
        <form onSubmit={addPerson}>
            <div>
            name: <input name='name' value={newName} onChange={handleNameChange} required/>
            </div>
            <div>number: <input name='number' value={newNumber} onChange={handleNumberChange} required/></div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}