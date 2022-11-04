import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const initialState = {
    name: "",
}

const PlayersDetails = (props) => {
    const [players, setPlayers] = useState(initialState)
    const navigate = useNavigate()
    let {id} = useParams()
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/players/${id}`)
            .then(res => setPlayers(res.data[0]))
            .catch(err => console.log(err))
}, [id])
const handleCancel = () => {
    navigate('/')
}
const handleEditOne = () => {
    navigate(`/edit/${id}`)
}
    return (
        <div>
            <p>Name: {players.name} </p>
            <p>Prefered Position (optional): {players.position} </p>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleEditOne}>Edit Player</button>
        </div>
    )
}

export default PlayersDetails