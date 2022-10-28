import React, { useState } from 'react'

const initialState = {
    task: "",
    completed:false
}

const EntryForm = (props) => {
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
                    <label htmlFor='task'>To do: </label>
                    <input name='task' type="text" value={values.task}  onChange={handleChange} />
            </div>
            <button className='Submit'>Add</button>
        </form>
    </div>
)
};
export default EntryForm