import React, { useState, useEffect } from 'react'
import axios from 'axios'
import phoneBook from './services/phonebook'
const App = () => {
  const [persons, setPersons] = useState([  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filteredPersons, setFilteredPersons] = useState('');

  /*const [newPersons, setNewPersons] = useState(persons)

  const handleDelete = (id) => {
    console.log(id )
    const url = `http://localhost:3001/persons/${id}`
    const personDeleted =  persons.find(n => n.id === id)
    const newPersonList =  { ...personDeleted, id: !personDeleted.id }
    
  return axios.delete(url + '/' + id, newPersonList).then(response => {
    setPersons(persons.filter ((p) => p.id !== persons.id ? personDeleted : response.data)) 

  })}*/


  const toggleDeleteOf = (id) => {
    const url = `http://localhost:3001/persons/${id}`
    const person = persons.find(n => n.id === id)
    console.log('importance of ' + id + ' needs to be toggled')

  const deletePerson = { ...person, id: !person.id }

  axios.put(url, deletePerson).then(response => {
    setPersons(persons.map(person => person.id !== id ? person : response.data))
  })
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const nameAdded = persons.some((person) => person.name === newName);

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange =(numEvent) => {
    console.log (numEvent.target.value)
    setNewNumber(numEvent.target.value)
  }

  useEffect(() => {
    phoneBook
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }, [])

  
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

    axios
    .post('http://localhost:3001/persons', nameObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
    phoneBook
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleFilter = (event) => {
    setFilterName(event.target.value);
    const filtered = persons.filter((person) =>
      // Check if the search term is included in the names in the phonebook
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPersons(filtered);
  };  

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);
    const confirmDelete = window.confirm(`Delete ${person.name}?`);
    if (confirmDelete) {
      phoneBook.deletePerson(id).then(() => {
        //Update state --> filter out deleted person
        const filteredPersons = persons.filter((person) => person.id !== id);
        setPersons(filteredPersons);

        // reset filter
        setFilterName("");
      });
    }
  };
 
  
  const Person = ({ person}) =>{ 
 
 (<div> {person.name} 
    {person.number}
    <button onClick={ handleDelete}>
      Delete
    </button>
  </div>
)};

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
        )) 
        }
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
        handleDelete={handleDelete}
        
      />
        
    </div>
    </div>
  )
}

export default App 