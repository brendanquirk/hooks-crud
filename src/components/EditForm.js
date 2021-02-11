import React, { useState } from 'react'

const EditForm = (props) => {
  const emptyPerson = { id: null, name: '', age: '' }

  const [person, setPerson] = useState(emptyPerson)

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e, id) => {
    e.preventDefault()
    props.editPerson(person, id)
  }

  return (
    <form
      onSubmit={() => {
        handleSubmit(person.id)
      }}
    >
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="age">Age</label>
      <input id="age" type="text" name="age" onChange={handleChange} />
      <br />
      <br />
      <input type="submit" value="Edit Person" />
    </form>
  )
}

export default EditForm
