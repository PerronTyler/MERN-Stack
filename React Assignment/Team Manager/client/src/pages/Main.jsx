import PlayerList from '../components/PlayerList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [players, setPlayers] = useState([])
    const getPlayers = () => {
        axios.get('http://127.0.0.1:8000/api/players')
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getPlayers()
    }, [])
    const handleSubmit = (id,values) => {
        axios.put(`http://127.0.0.1:8000/api/players/edit/${id}`,
                values
            )
                .then(res => (getPlayers()))
                .catch(err => (console.log(err)))
    }
    const handleDeleteOne = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/players/delete/${id}`)
            .then(res => setPlayers(players.filter(player => player._id !== id)))
            .catch(err => console.log(err))
    }
    return (
        <>
            <PlayerList handleDeleteOne={handleDeleteOne} players={players} handleSubmit = {handleSubmit} />
        </>
    );
}

export default Main;