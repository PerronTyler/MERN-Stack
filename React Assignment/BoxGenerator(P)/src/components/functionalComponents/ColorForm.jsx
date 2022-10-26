import React, { useState } from 'react'

const initialState = {
    color: "",
}
const ColorForm = (props) => {
    const [values, setValues] = useState(initialState)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(values)
        setValues(initialState)
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor='color'>Color: </label>
                    <input name='color' type="text" value={values.color}  onChange={handleChange} />
            </div>
            <button className='Submit'>Submit Form</button>
        </form>
    </div>
)
}

export default ColorForm