import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const PlayerList = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const handleChange = (e) => {
        const target_id = e.target.value
        const value = e.target.name
        let game = 'game1'
        let targetChange = {
            game: value
        } 
        if(id == 1){
            game = 'game1'
            targetChange = {
                game: value
            } 
            props.handleSubmit(target_id,targetChange)
        }else if(id == 2){
            game = 'game2'
            targetChange = {
                game: value
            } 
            props.handleSubmit(target_id,targetChange)
        }else if(id ==3){
            game = 'game3'
            targetChange = {
                game: value
            } 
            props.handleSubmit(target_id,targetChange)
        }
    }
    const handleDeleteOne = (e) => {
        const playerId = e.target.value
        const playerName = e.target.name
        
        if (window.confirm(`Are you sure you want to remove ${playerName}`) == true) {
            props.handleDeleteOne(playerId)
        }
    }
let playerElements = <h1>Loading...</h1>
if (!id){
    playerElements = props.players.map((player, indx) => (<div key={indx}>
        <h2 >
            {player.name}
            <button name={player.name} value={player._id} onClick={handleDeleteOne}>Delete player</button>
        </h2>
    </div>))
}
if(id == 1){
    playerElements = props.players.map((player, indx) => (<div key={indx}>
        <h2 >{player.name}</h2>
        {player.status.game1 == 'undecided' && <><button name='playing' value={player._id} onClick={handleChange}>Playing</button><button name='not playing' value={player._id} onClick={handleChange}>Not Playing</button><button style={{backgroundColor:'yellow'}}>Undecided</button></>}
        {player.status.game1 == 'playing' && <><button style={{backgroundColor:'green'}}>Playing</button><button value={player._id} name='not playing' onClick={handleChange}>Not Playing</button><button value={player._id} name='undecided' onClick={handleChange}>Undecided</button></>}
        {player.status.game1 == 'not playing' && <><button name='playing' value={player._id} onClick={handleChange}>Playing</button><button style={{backgroundColor:'red'}}>Not Playing</button><button value={player._id} name='undecided' onClick={handleChange}>Undecided</button></>}
    </div>))
}else if(id == 2){
    playerElements = props.players.map((player, indx) => (<div key={indx}>
        <h2 >{player.name}</h2>
        {player.status.game2 == 'undecided' && <><button name='playing' value={player._id} onClick={handleChange}>Playing</button><button name='not playing' value={player._id} onClick={handleChange}>Not Playing</button><button style={{backgroundColor:'yellow'}}>Undecided</button></>}
        {player.status.game2 == 'playing' && <><button style={{backgroundColor:'green'}}>Playing</button><button value={player._id} name='not playing' onClick={handleChange}>Not Playing</button><button value={player._id} name='undecided' onClick={handleChange}>Undecided</button></>}
        {player.status.game2 == 'not playing' && <><button name='playing' value={player._id} onClick={handleChange}>Playing</button><button style={{backgroundColor:'red'}}>Not Playing</button><button value={player._id} name='undecided' onClick={handleChange}>Undecided</button></>}
    </div>))
}else if(id == 3){
    playerElements = props.players.map((player, indx) => (<div key={indx}>
        <h2 >{player.name}</h2>
        {player.status.game3 == 'undecided' && <><button name='playing' value={player._id} onClick={handleChange}>Playing</button><button name='not playing' value={player._id} onClick={handleChange}>Not Playing</button><button style={{backgroundColor:'yellow'}}>Undecided</button></>}
        {player.status.game3 == 'playing' && <><button style={{backgroundColor:'green'}}>Playing</button><button value={player._id} name='not playing' onClick={handleChange}>Not Playing</button><button value={player._id} name='undecided' onClick={handleChange}>Undecided</button></>}
        {player.status.game3 == 'not playing' && <><button name='playing' value={player._id} onClick={handleChange}>Playing</button><button style={{backgroundColor:'red'}}>Not Playing</button><button value={player._id} name='undecided' onClick={handleChange}>Undecided</button></>}
    </div>))
}

    return (
        <>
            <h1>All Players</h1>
            {playerElements}
        </>
    )
}

export default PlayerList