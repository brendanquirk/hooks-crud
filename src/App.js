import React, { useState } from 'react'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'

const App = () => {
  const peopleList = [
    { id: 1, name: 'Brendan', age: 24 },
    { id: 2, name: 'Matt', age: 34 },
    { id: 3, name: 'Leland', age: 25 },
  ]

  const [people, setPeople] = useState(peopleList)

  const [editing, setEditing] = useState(false)

  const addPerson = (person) => {
    person.id = person.length + 1 // this will let us keep an id on each new element
    setPeople([...people, person]) // here we are using the spread operator to add the new person we will be creating into the state of people
  }

  const editPerson = (person, id, e) => {
    let newPeopleArr = people.map((person) => {
      if (person.id === id) {
        return { ...person, [person.name]: e.target.value }
      } else {
        return person
      }
    })
    setPeople(newPeopleArr)
  }

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }

  return (
    <div>
      <h1>React Hooks CRUD</h1>
      <AddForm addPerson={addPerson} />
      {people.map((person) => {
        return (
          <>
            <h3>Name: {person.name}</h3>
            <h5>Age: {person.age}</h5>
            <details>
              <summary>Edit Person</summary>
              <EditForm person={person} editPerson={editPerson} />
            </details>
            <button onClick={() => deletePerson(person.id)}>X</button>
          </>
        )
      })}
    </div>
  )
}

export default App
