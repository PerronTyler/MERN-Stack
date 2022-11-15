import React from 'react'
import {useParams} from 'react-router-dom'

const DungeonEvent = ({cards, getRandomChoices, getRandomEvent, addRandomCardToDeck, addCardToDeck, getRandomEnemy }) => {
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
    if (event === 'sanctuary'){
        dungeonElements = <>
        <div>
            Sanctuary
        </div>
        </>
    }
    if (event === 'enemy'){
        const foe = getRandomEnemy()
        dungeonElements = <>
        <div>
            <h1>{foe.name}</h1>
            <h1>strength: {foe.magnitude}</h1>
            <h1>health: {foe.health}</h1>
        </div>
        </>
        
    }
    if (event === 'choose'){
        const choices = getRandomChoices()
        console.log(choices);
        dungeonElements = <>
        <div>
            <h3>{choices[0].name}</h3>
            <p>{choices[0].type}</p>
            <p>{choices[0].description}</p>
            <button onClick={() => addCardToDeck(choices[0])}> add this card </button>
        </div>
        <div>
        <h3>{choices[1].name}</h3>
            <p>{choices[1].type}</p>
            <p>{choices[1].description}</p>
            <button onClick={() => addCardToDeck(choices[1])}> add this card </button>
        </div>
        <div>
            <button onClick={() => addRandomCardToDeck()}> add random card </button>
        </div>
        </>
    }

    return (
        <>
        {dungeonElements}
        </>
    )
}

export default DungeonEvent