import React from 'react'
import DungeonEvent from '../components/DungeonEvent'
import useGame from '../hooks/useGame'

const Game = ({cards, events, enemies}) => {
    const {
        deck, hand, selected, usedDeck, addRandomCardToDeck, addCardToDeck, drawCardToHand, getRandomChoices, handleSelected, shuffleDeck, getRandomEvent, getRandomEnemy
    } = useGame(cards, events, enemies)

console.log(deck);
    return (
        <div>
            <p> Hello </p>
        <DungeonEvent cards = { cards } getRandomEvent = { getRandomEvent } getRandomChoices = { getRandomChoices } addRandomCardToDeck = { addRandomCardToDeck } addCardToDeck = { addCardToDeck } getRandomEnemy = { getRandomEnemy } />
        </div>
    )
}

export default Game