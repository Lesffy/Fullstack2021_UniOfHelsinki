import React, { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 123 }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const nameAdded = persons.some((person) => person.name === newName);
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange =(numEvent) => {
    console.log (numEvent.target.value)
    setNewNumber(numEvent.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject= {
      name: newName, 
      number: newNumber
    }

    if (nameAdded){
      setPersons(persons)
      window.alert(newName + ` is already added to phonebook`)
      console.log(newName + `is already added to phonebook`)
   }
    else 
    { setPersons(persons.concat(nameObject))}
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
    
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
            
        </div>
        <div>number: <input value= {newNumber}
        onChange = {handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     <div>
      {persons.map(person => 
        <div key = {person.name}> {person.name} {person.number} </div>)}  
      </div>
        
    </div>
  )
}

export default App 