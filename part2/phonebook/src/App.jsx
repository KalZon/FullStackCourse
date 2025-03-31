import { useState, useEffect } from 'react'
import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'
import { Filter } from './components/Filter'
import personServices from './services/persons'
import axios from 'axios'
import {Notificacion} from './components/Notificacion'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('') 
  const [notificationError, setNotificationError] = useState(null)
  const [notificationSuccess, setNotificationSuccess] = useState(null)

  useEffect(() => {
    personServices.getAll()
    .then(initialPersons => setPersons(initialPersons))
  }, [])


  // Control de cada cambio en los inputs
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase().trimStart())
  }

  // Funcion de reset para no repetirlo a la hora de usar otras funciones
  const resetInputs = () =>{
    setNewName('')
    setNewNumber('')
  }
  
  // Formateo para no poder agregar espacios finales
  const formatNewName = newName.trim()

  // Forma de filtrado por un nuevo slug
  const updatingPerson = persons.find(num => num.slug === formatNewName.toLowerCase())

  const updatePersona = id => {
    const url = `http://localhost:3001/persons/${id}`
    //console.log('aca funciona')
    const persona = persons.find(num => num.slug === formatNewName.toLowerCase())
    console.log(persona)
    //console.log(persona.id)
    const changedPersons = { ...persona, number: newNumber }

    axios.put(url, changedPersons)
    .then(response => {
      setPersons(persons.map(persona => persona.id !== id ? persona : response.data))
      setNotificationSuccess(`${persona.name} updated successfully`)
    
      setTimeout(() => {
        setNotificationSuccess(null)
      }, 2000)
    })
    .catch(error => {
      setNotificationError(`${persona.name} was already removed from sever`)
    
      setPersons(persons.filter(person => person.id !== id))
      setTimeout(() => {
        setNotificationError(null)
      }, 2000)
    
    })
    resetInputs()
  }
  
  const addPerson = (event) => {
    event.preventDefault()
    const phoneReq = /^[0-9-]+$/
    
    
    const personObject = {
      name: formatNewName,
      slug: formatNewName.toLowerCase(),
      number: newNumber
    }
     
    if (!phoneReq.test(newNumber)) {
      setNotificationError('You can only type numbers or hyphens')
      setTimeout(() => {
        setNotificationError(null)
      }, 2000)

    } else if (!persons.some(person => person.slug === formatNewName.toLowerCase() || person.number === newNumber)) {

      personServices.create(personObject)
        .then(returnPerson => {
          setPersons(persons.concat(returnPerson))
          setNotificationSuccess(`Added ${formatNewName}`)
          setTimeout(() => {
            setNotificationSuccess(null)
          }, 2000)
          resetInputs()
        })
    } else if(persons.some(person => person.slug === formatNewName.toLowerCase())){

      const confirmationUpdate = window.confirm(`${formatNewName} is already added, do you want to replace the old number with a new one?`)
      confirmationUpdate
      ? updatePersona(updatingPerson.id)
      : resetInputs()
    } else{
      setNotificationError(`You already added a person with the number: ${newNumber}`)
      resetInputs()
    }
  }

  const eliminarPersona = (id, name) =>{
    if (window.confirm(`Delete ${name}?`)){
      personServices.deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }    
    
  }

  // Filter
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter)
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notificacion messageError={notificationError} messageSuccess={notificationSuccess}/>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={eliminarPersona}/>
    </div>
  )
}

export default App
