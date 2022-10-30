import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const initialState = [{
    query: '',
    id:'',
}]

const LukeForm = (props) => {
    const [values, setValues] = useState(initialState)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})

    }
    const handleSubmit = (e) => {
        console.log(values);
        e.preventDefault()
        if (values.query && values.id){
            navigate(`/${values.query}/${values.id}`)
        }
        else {
            alert("Form has missing inputs")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Starwars API</h1>
                </div>
                <div>
                    <h2>Search For: </h2>
                    <select name='query' value={values.query} onChange={handleChange}>
                        <option hidden value="">-- Please Select a query --</option>
                        <option value='people'>People</option>
                        <option value='planets'>Planets</option>
                    </select>
                </div>
                <div>
                    <h2>ID: </h2>
                    <input type="number" name='id' value={values.id} onChange={handleChange} />
                </div>
                <button name='send' value='true' type="submit">Search</button>
            </form>
            <Outlet />
        </div>
    )
}

export default LukeForm