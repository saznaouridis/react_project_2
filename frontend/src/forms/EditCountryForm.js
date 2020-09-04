import React, { useState, useEffect } from 'react'

const EditCountryForm = props => {
  const {updateCountry} = props;
  const [ country, setCountry ] = useState(props.curCountry)

  useEffect(
    () => {
      setCountry(props.curCountry)
    },
    [ props ]
  )

  // skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = e => {
    const { name, value } = e.target

    setCountry({ ...country, [name]: value })
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        updateCountry(country.id, country)
      }}>
      <label>Country</label>
      <input type="text" name="name" value={country.name} onChange={handleInputChange} />
      
        <label>Capital</label>
        <input type="text" name="capital" value={country.capital} onChange={handleInputChange} />
      
      <p>
        <button>Update Country</button>
        <button onClick={() => props.setEdit(false)} className="button muted-button">
        Cancel
        </button>
      </p>
    </form>
  )
}

export default EditCountryForm