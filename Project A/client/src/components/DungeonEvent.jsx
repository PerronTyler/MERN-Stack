import React from 'react'
import { useParams } from 'react-router-dom'

const DungeonEvent = ({ foe, hand, selected, shuffleDeck, deck, player, cards, handleSubmit, handleHand, handleSelected, getRandomChoices, getRandomEvent, addRandomCardToDeck, addCardToDeck, getRandomEnemy, sanctuaryHeal, sanctuaryTraining, drawCardToHand }) => {
    const { event } = useParams()
    const { id } = useParams()
    console.log(player);
    let dungeonElements = <h1>Loading...</h1>
    let playerElements = <></>
    let handElements = <></>
    let selectedElements = <></>
    if (event === 'enemy') {
        if (!foe) { getRandomEnemy() }
        playerElements = <p> Loading Player Data... </p>
        handElements = <p>Draw cards until you have 6 in your hand!</p>
        selectedElements = <p>Click cards from your hand to add them to Selected!</p>
    }
    if (!id && !event) {
        dungeonElements = <div className='container container-md object-center'>
            <div className='inline'>
                <button className='button1' onClick={() => getRandomEvent()}>
                    Left
                </button>
            </div>
            <div className='inline'>
                <button className='button1' onClick={() => getRandomEvent()}>
                    Right
                </button>
            </div>
            <div>
                <button className='button1' onClick={() => getRandomEvent()}>
                    Flip a Coin!
                </button>
            </div>
        </div>
    }
    if (event === 'sanctuary') {
        dungeonElements = <>
            <div>
                Sanctuary
            </div>
            <div>
                <button className='button1' onClick={() => sanctuaryHeal()}>
                    Heal 5 HP
                </button>
            </div>
            <div>
                <button className='button1' onClick={() => sanctuaryTraining()}>
                    Train your Strength (not yet implemented)
                </button>
            </div>
        </>
    }
    if (foe && event === 'enemy') {
        dungeonElements = <>
            <div className='container container-md'>
                <h1>{foe.name}</h1>
                <h1>strength: {foe.magnitude}</h1>
                <h1>health: {foe.health}</h1>
            </div>
        </>
    }
    if (event === 'choose') {
        const choices = getRandomChoices()
        console.log(choices);
        dungeonElements = <>
            <div>
                <h3>{choices[0].name}</h3>
                <p>{choices[0].type}</p>
                <p>{choices[0].description}</p>
                <button className='button1' onClick={() => addCardToDeck(choices[0])}> add this card </button>
            </div>
            <div>
                <h3>{choices[1].name}</h3>
                <p>{choices[1].type}</p>
                <p>{choices[1].description}</p>
                <button className='button1' onClick={() => addCardToDeck(choices[1])}> add this card </button>
            </div>
            <div>
                <button className='button1' onClick={() => addRandomCardToDeck()}> add random card </button>
            </div>
        </>
    }
    if (event === 'enemy' && player && deck) {
        playerElements = <>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
                <progress data-bs-toggle="tooltip" data-bs-placement="top" title={player.health} id="health" value={player.health} max="20"></progress>
                <div id="tooltip-animation" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Health: {player.health}
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
                <div>Cards left in Deck: {deck.length} </div>
            </div>
        </>
    }
    if (deck && deck.length === 0) {
        shuffleDeck()
    }
    if (event === 'enemy' && !hand && selected.length + hand.length != 6) {
        handElements = <button className='button1' type='button' onClick={() => drawCardToHand()}>Draw a card!</button>
    } else if (event === 'enemy' && hand && selected.length + hand.length != 6) {
        handElements = <>
            <button className='button1' onClick={() => drawCardToHand()}>Draw a card!</button>
            <div className='inline-grid grid-cols-6 gap-4'>
                {hand.map(card =>
                    <div className='outline outline-4 outline-stone-600 border-[12px] xl:rounded-xl border-amber-400 max-w-[11rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => handleSelected(card)}>
                        <img className='border-[12px] border-outline-black-500 border-amber-500' src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="Image not yet added" />
                        <div className='border-[12px] border-amber-500 px-6 py-4'>
                            <div className='font-bold text-sky-300 text-xl mb-2'>{card.name}</div>
                            <p className='text-white text-xs'>{card.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    } else if (event === 'enemy' && hand && selected.length + hand.length === 6) {
        handElements = <>
            <div className='inline-grid grid-cols-6 gap-4'>
                {hand.map(card => <div>
                    <div className='outline outline-4 outline-stone-600 border-[12px] xl:rounded-xl border-amber-400 max-w-[11rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => handleSelected(card)}>
                        <img className='border-[12px] border-outline-black-500 border-amber-500' src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="Image not yet added" />
                        <div className='flex flex-col justify-center border-[12px] border-amber-500 px-6 py-4'>
                            <div className='font-bold text-sky-300 text-xl mb-2'>{card.name}</div>
                            <p className='text-white text-xs'>{card.description}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>
    }
    if (event === 'enemy' && selected && selected.length != 6) {
        selectedElements = <>
            <div className='inline-grid grid-cols-1 gap-4'>
                <h1>Selected</h1>
                {selected.map(card =>
                    <div className='outline outline-4 outline-stone-600 border-[6px] sm:rounded-sm border-amber-400 max-w-[5rem] max-h-[4rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => handleHand(card)}>
                        <div className='flex justify-center content-center border-[4px] border-amber-500 px-6 py-4'>
                            <div className='font-bold text-sky-300 text-sm mb-2'>{card.name}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    } else if (event === 'enemy' && selected && selected.length === 6) {
        selectedElements = <>
            <div className='inline-grid grid-cols-1 gap-4'>
                <div>
                    <h1>Selected</h1>
                    <button className='button1' onClick={() => handleSubmit()}> Submit </button>
                </div>
                {selected.map(card =>
                    <div className='outline outline-4 outline-stone-600 border-[6px] sm:rounded-sm border-amber-400 max-w-[4rem] max-h-[4rem] rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-emerald-800 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 duration-300' onClick={() => handleHand(card)}>
                        <div className='flex justify-center border-[4px] border-amber-500 p-4'>
                            <div className='font-bold text-sky-300 text-sm '>{card.name}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    }
    let displayElements = <p>Loading Dungeon...</p>
    if(event === 'enemy'){
        displayElements = <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='grid grid-cols-6 gap-4 w-[90%] '>
                    <div className='col-start-4 col-span-3 outline outline-4 outline-amber-400 border-[4px] border-amber-500 bg-stone-500 m-8 h-[80%]'>
                        {dungeonElements}
                    </div>
                    <div className='col-start-1 col-span-3 outline outline-4 outline-amber-400 border-[4px] border-amber-500 bg-stone-500 m-8 h-[80%]'>
                        {playerElements}
                    </div>
                </div>
                <div className='flex outline outline-4 outline-amber-400 border-[4px] border-amber-500 bg-stone-500 w-[8rem] h-[35rem] p-4'>
                    {selectedElements}
                </div>
            </div>
            <div className='outline outline-4 outline-amber-400 border-[4px] border-amber-500 bg-stone-500 h-[20rem] w-[90%] p-4 m-8'>
                {handElements}
            </div>
        </div>
    } else {
        displayElements = <div>
            {dungeonElements}
        </div>
    }
    return (
        <>
            {displayElements}
        </>
    )
}

export default DungeonEvent