import React, { Fragment, useState } from 'react'

const AddCountryForm = props => {
	const initialState = { id: null, name: '', capital: '' }
	const [ country, setCountry ] = useState(initialState)

	const handleInputChange = e => {
		const { name, value } = e.target

		setCountry({ ...country, [name]: value })
	}

	return (

		<Fragment>
		<form
			onSubmit={e => {
				e.preventDefault()
				if (!country.name || !country.capital) return

				props.addCountry(country)
				setCountry(initialState)
			}}
		>
			<label className="text-center mt-5">Countries</label>
			<input type="text" 
			name="name" 
			className="form-control" 
			value={country.name} 
			onChange={handleInputChange} />
			
				<label>Capitals</label>
				<input type="text" name="capital" value={country.capital} onChange={handleInputChange} />
			
			<p>
				<button className="btn btn-success">Add</button>
			</p>
		</form>
		</Fragment>
	)
}


export default AddCountryForm
