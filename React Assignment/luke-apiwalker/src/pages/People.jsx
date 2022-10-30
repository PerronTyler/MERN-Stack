import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const People = () => {
  const [values, setValues] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  console.log(values);
  useEffect(() => {
    console.log("Using the Force");
    axios
      .get(`https://swapi.dev/api/people/${id}`)
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
          Height: {values.height}
        </p>
      </div>
      <div>
        <p>
          Mass: {values.mass}
        </p>
      </div>
      <div>
        <p>
          Hair Color: {values.hair_color}
        </p>
      </div>
    </div>
  )
}

export default People