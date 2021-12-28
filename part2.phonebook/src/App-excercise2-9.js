import React, { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filteredPersons, setFilteredPersons] = useState('');

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

  const handleFilter = (event) => {
    setFilterName(event.target.value);
    const filtered = persons.filter((person) =>
      // Check if the search term is included in the names in the phonebook
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPersons(filtered);
  };  

const Person = ({ person}) => (
  
    <div> {person.name} 
    {person.number}
   
  </div>
);
const Persons = ({ filter, persons, filteredPersons}) => (
  <div>
    {filter === ""
      ? persons?.map(person => (
          <Person
            key={person.name}
            person={person}   
          />
        ))
      : filteredPersons?.map(person => (
          <Person
            key={person.name}
            person={person}    
          />
        ))}
  </div>
);
  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with: <input value={filterName}
            onChange={handleFilter} />  
        </div>

        <h2>add a new</h2>
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
      
     <Persons
        filter={filterName}
        persons={persons}
        filteredPersons={filteredPersons}   
      />
        
    </div>
    </div>
  )
}

export default App 