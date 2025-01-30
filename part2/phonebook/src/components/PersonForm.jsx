
export function PersonForm({addPerson, newName, newNumber, handleNameChange, handleNumberChange, error}){

    return (
        <form onSubmit={addPerson}>
            <div>
            name: <input name='name' value={newName} onChange={handleNameChange} />
            </div>
            <div>number: <input name='number' value={newNumber} onChange={handleNumberChange} /></div>
            {error && <h4 style={{color: 'red'}}>You can only type numbers or hyphens</h4>}
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}