import React from 'react'
import DungeonEvent from '../components/DungeonEvent'
import useGame from '../hooks/useGame'

const Game = ({cards, events}) => {
    const {
        deck, hand, selected, usedDeck, addRandomCardToDeck, addCardToDeck, drawCardToHand, getRandomChoices, handleSelected, shuffleDeck, getRandomEvent
    } = useGame(cards, events)

console.log(deck);
    return (
        <div>
            <p> Hello </p>
        <DungeonEvent cards = { cards } events = { events } getRandomEvent = { getRandomEvent } getRandomChoices = { getRandomChoices } />
        </div>
    )
}

export default Game