import React, { useState, useEffect } from 'react'

const Button = () => {
    const [pokemon, setPokemon] = useState([]);
    const [send, setSend] = useState(false)
    useEffect(() => {
        if (send === true) {
            console.log("catching pokemon");
            fetch("https://pokeapi.co/api/v2/pokemon")
                .then(response => response.json())
                .then(response => setPokemon(response.results))
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