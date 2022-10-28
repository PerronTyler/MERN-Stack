import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Button = () => {
    const [pokemon, setPokemon] = useState([]);
    const [send, setSend] = useState(false)
    useEffect(() => {
        if (send === true) {
            console.log("catching pokemon");
            axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
                .then(response => setPokemon(response.data.results))
                console.log(pokemon);
    }}, [send])

    const fetchEm = () => {
        setSend(true)
    }

        ;
    return (
        <div>
            <div>
                <button onClick={(e) => { fetchEm(e) }}>Catch em' ALL</button>
            </div>
            <div>
                {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                    return (<div key={index}> <p>{pokemon.name}</p></div>)
                })}
            </div>
        </div>
    )
}

export default Button