import React from 'react'
import {useParams} from 'react-router-dom'

const DungeonEvent = ({foe, hand, selected, shuffleDeck, deck, player, cards, handleSubmit, handleHand, handleSelected, getRandomChoices, getRandomEvent, addRandomCardToDeck, addCardToDeck, getRandomEnemy, sanctuaryHeal, sanctuaryTraining, drawCardToHand }) => {
    const { event } = useParams()
    const { id } = useParams()
    console.log(player);
    let dungeonElements = <h1>Loading...</h1>
    let playerElements = <></>
    let handElements = <></>
    let selectedElements = <></>
    if (event === 'enemy') {
        if (!foe){getRandomEnemy()}
        playerElements = <p> Loading Player Data... </p>
        handElements = <p>Draw cards until you have 6 in your hand!</p>
        selectedElements = <p>Click cards from your hand to add them to Selected!</p>
    }
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
        <div>
        <button onClick={() => sanctuaryHeal()}>
                Heal 5 HP
            </button>
        </div>
        <div>
        <button onClick={() => sanctuaryTraining()}>
                Train your Strength (not yet implemented)
            </button>
        </div>
        </>
    }
    if (foe && event === 'enemy'){
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
    if (event === 'enemy' && player && deck.length > 1) {
        playerElements = <>
        <div>
            <p>Your Health:  {player.health}</p>
            <p>Cards left in Deck: { deck.length } </p>
        </div>
        </>
    }
    if (deck && deck.length === 0) {
        shuffleDeck()
    }
    if (event === 'enemy' && !hand && selected.length + hand.length != 6){
        handElements = <button onClick={() => drawCardToHand() }>Draw a card!</button>
    } else if (event === 'enemy' && hand && selected.length + hand.length != 6) {
        handElements = <> 
        <button onClick={ () => drawCardToHand() }>Draw a card!</button>
        {hand.map(card => <div>
            <div onClick={() => handleSelected(card) }>
                <h3>{card.name}</h3>
                <p>{card.type}</p>
                <p>{card.description}</p>
            </div>
        </div>
        )}
        
        </>
    }else if (event === 'enemy' && hand && selected.length + hand.length === 6) {
        handElements = <><h1>Your Hand</h1>
        <p>Click a card to move it to Selected Cards</p>
        {hand.map(card => <div>
            <div onClick={() => handleSelected(card) }>
                <h3>{card.name}</h3>
                <p>{card.type}</p>
                <p>{card.description}</p>
            </div>
        </div>
        )}
        </>
    }
    if (event === 'enemy' && selected && selected.length != 6) {
        selectedElements = <> <h1>Selected Cards</h1>
        <p>Click a card to move it back to your hand</p>
        <p>Or click submit when 6 cards are in Selected to perform your ACTION</p>
        {selected.map(card => <div>
            <div onClick={() => handleHand(card) }>
                <h3>{card.name}</h3>
                <p>{card.type}</p>
                <p>{card.description}</p>
            </div>
        </div>
        )}
        </>
    } else if (event === 'enemy' && selected && selected.length === 6) {
        selectedElements = <> 
        <h1>Selected Cards</h1>
        <p>Click a card to move it back to your hand</p>
        <p>Or click submit when 6 cards are in Selected to perform your ACTION</p>
        <button onClick={() => handleSubmit() }> Submit </button>
        {selected.map(card => <div>
            <div onClick={() => handleHand(card) }>
                <h3>{card.name}</h3>
                <p>{card.type}</p>
                <p>{card.description}</p>
            </div>
        </div>
        )}
        </>
    }
    return (
        <>
        {dungeonElements}
        {selectedElements}
        {handElements}
        {playerElements}
        </>
    )
}

export default DungeonEvent