import { useState, useEffect } from 'react'
import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'
import { Filter } from './components/Filter'
import personServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('') 
  const [error, setError] = useState(false)

  useEffect(() => {
    personServices.getAll()
    .then(initialPersons => setPersons(initialPersons))
  }, [])
  console.log('render', persons.length, 'notes')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const resetInputs = () =>{
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    const phoneReq = /^[0-9-]+$/
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Completa todos los campos')
    } else if (!phoneReq.test(newNumber)) {
      setError(true)
    } else if (!persons.some(person => person.name.toLowerCase() === newName || person.number === newNumber)) {
      setError(false)
      personServices.create(personObject)
        .then(returnPerson => {
          setPersons(persons.concat(returnPerson))
          resetInputs()
        })
    } else if(persons.some(person => person.name.toLowerCase() === newName)){
      setError(false)
      const confirmationUpdate = window.confirm(`${newName} is already added, do you want to replace the old number with a new one?`)
      resetInputs()
    }
  }

  const eliminarPersona = (id, name) =>{
    const confirmation = window.confirm(`Delete ${name}?`)
      confirmation
      ? personServices.deletePerson(id)
      : console.log('No se acepto la solicitud de eliminación')
    
    setPersons(persons.filter(person => person.id !== id))
  }

  // Filter
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter)
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} error={error}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={eliminarPersona}/>
    </div>
  )
}

export default App
