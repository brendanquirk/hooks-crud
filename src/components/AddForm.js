import React, { useState } from 'react'

const AddForm = (props) => {
  const emptyPerson = { id: null, name: '', age: '' }

  const [person, setPerson] = useState(emptyPerson)

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addPerson(person)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={person.name}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="text"
        name="age"
        value={person.age}
        onChange={handleChange}
      />
      <br />
      <br />
      <input type="submit" value="Add User" />
    </form>
  )
}

export default AddForm
