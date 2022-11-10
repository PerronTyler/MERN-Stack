import React from 'react'
import { useParams} from 'react-router-dom'

const DungeonEvent = ({cards, events, getRandomChoices, getRandomEvent }) => {
    const { event } = useParams()
    const { id } = useParams()

    let dungeonElements = <h1>Loading...</h1>

    if (!id && !event){
        dungeonElements = <div>
            <div>
            <button onClick={() => getRandomEvent()}>
                Left
            </button>
            </div>
            <div>
            <button onClick={() => getRandomEvent()}>
                Right
            </button>
            </div>
            <div>
            <button onClick={() => getRandomEvent()}>
                Flip a Coin!
            </button>
            </div>

    </div>
    }
    return (
        <>
        {dungeonElements}
        </>
    )
}

export default DungeonEvent