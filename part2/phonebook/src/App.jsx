import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '849-84-85', id: 1 }, 
    { name: 'Kaleb Zambrano', number:'95-9846-56', id: 2}
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    if (newName.trim() === '' || newNumber.trim() === ''){
      alert('Completa todos los campos')
    }else if (!persons.some(person => person.name === newName || person.number === newNumber)){
      setPersons([...persons, { name: newName, number: newNumber, id: persons.length+1 }]);
      setNewName('');
      setNewNumber('');
    }else{
      alert(`${newName} or ${newNumber} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input name='name' value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input name='number' value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
      <div>debug: {newName}, {newNumber}</div>
    </div>
  );
};

export default App;
