import { useState } from 'react'
import BadButton from 'components/Button/BadButton';
import GoodButton from 'components/Button/GoodButton';
import OkButton from 'components/Button/OkButton';
import ResetButton from 'components/Button/ResetButton';
import { Context as CounterContext } from 'contexts/countersContext';
import { useContext } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const addName = (e) => {
    const newPerson = { name: newName }
    setPersons(persons.concat(newPerson))
    setNewName('')
    e.preventDefault()
  }

  const handleChangeName =(event)=> {

    setNewName(event.target.value)
  }


  return (
    <div>
    <form onSubmit={addName}>
      <input value= {newName} onChange={handleChangeName}/>
      <button type="submit"> save</button>
    </form>
    <h2>Numbers</h2>
    <ul> 
      {persons.map((person,index)=> 
      <li key={index}> {person.name}</li>)}
    </ul>
  </div>
  )
}

export default App