import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    health: 20,
    training:1,
    kills:0
}

const useGame = (cards, events, enemies) => {
    const navigate = useNavigate()
    const [deck, setDeck] = useState(null)
    const [hand, setHand] = useState([])
    const [selected, setSelected] = useState([])
    const [usedDeck, setUsedDeck] = useState([])
    const [player, setPlayer] = useState(initialState)

// Deck, Card, and Hand functions

    const buildDeck = () => {
        const tempCards = [] 
        for(let i = 0; i < 12; i++){
            const randomCardIndx = Math.floor(Math.random()* cards.length)
            tempCards.push(cards[randomCardIndx])
        }
        return tempCards
    }

    useEffect(() => {
        if(!deck){
            setDeck(buildDeck())
        }
    }, [])

    const getRandomChoices = () => {
        return [cards[Math.floor(Math.random()* cards.length)], cards[Math.floor(Math.random()* cards.length)]]
    }
    const addRandomCardToDeck = () => {
        const randomCardIndx = Math.floor(Math.random()* cards.length)
        setDeck([...deck, cards[randomCardIndx]])
        navigate('/dungeoncrawl')
    }
    const addCardToDeck = (card) => {
        setDeck([...deck, card])
        navigate('/dungeoncrawl')
    }
    const drawCardToHand = () => {
        if (deck !== []){
        const randomCardIndx = Math.floor(Math.random()* deck.length)
        setHand([...hand, deck[randomCardIndx]])
        setUsedDeck([...usedDeck, deck[randomCardIndx]])
        setDeck([...deck].splice(randomCardIndx,1))
        }
    }
    const handleSelected = (card) => {
        setSelected([...selected, card])
        const indx = hand.indexOf(card)
        setHand([...hand].splice(indx,1))
    }
    const shuffleDeck = () => {
        setDeck(usedDeck)
        setUsedDeck([])
    }

    // event functions
    const getRandomEvent = () => {
        const randomEvent = events[Math.floor(Math.random()* (events.length - 1))]
        navigate(`/dungeoncrawl/${randomEvent.name}/${randomEvent._id}`)
    }
    // player, enemy, boss functions
    const getRandomEnemy = () => {
        return enemies[Math.floor(Math.random()* (enemies.length))]
    }
    const sanctuaryHeal = () => {
        setPlayer([...player, player.health += 5])
    }
    const sanctuaryTraining = () => {
        setPlayer([...player, player.training += 1])
    }
return {
    player, deck, hand, selected, usedDeck, addRandomCardToDeck, addCardToDeck, drawCardToHand, getRandomChoices, handleSelected, shuffleDeck, getRandomEvent, getRandomEnemy, sanctuaryHeal, sanctuaryTraining  
}
}

export default useGame

