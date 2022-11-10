import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const useGame = (cards, events) => {
    const navigate = useNavigate()
    const [deck, setDeck] = useState(null)
    const [hand, setHand] = useState([])
    const [selected, setSelected] = useState([])
    const [usedDeck, setUsedDeck] = useState([])

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
    }
    const addCardToDeck = (card) => {
        setDeck([...deck, card])
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
return {
    deck, hand, selected, usedDeck, addRandomCardToDeck, addCardToDeck, drawCardToHand, getRandomChoices, handleSelected, shuffleDeck, getRandomEvent
}
}

export default useGame

