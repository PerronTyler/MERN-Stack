import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Planets = () => {
    const [values, setValues] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        console.log("Using the Force");
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setValues(response.data))
            .catch((e) => navigate('/Error'))
        console.log(values);
    }, [id, navigate])
    return !values ? (<p>Loading...</p>) : (

        <div>
            <h1>Results:</h1>
            <div>
                <h2>
                    {values.name}
                </h2>
            </div>
            <div>
                <p>
                    Rotation Period: {values.rotation_period}
                </p>
            </div>
            <div>
                <p>
                    Orbital Period: {values.orbital_period}
                </p>
            </div>
            <div>
                <p>
                    Diameter: {values.diameter}
                </p>
            </div>
        </div>
    )
}

export default Planets