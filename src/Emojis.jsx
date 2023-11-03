import './Emojis.css'

import { useState } from "react"

const uuid = () => crypto.randomUUID()

const emojiOptions = ['😀', '😁', '😂', '🤣', '😎', '😍']

const randIndex = (array) => Math.floor(Math.random() * array.length)
const randEmoji = () => emojiOptions[randIndex(emojiOptions)]
const emojiObj = () => ({id: uuid(), emoji: randEmoji()})

function Emojis() {
    const [emojis, setEmojis] = useState([emojiObj()])

    console.log(emojis)

    const addEmoji = () => {
        setEmojis(previousEmojis => [...previousEmojis, emojiObj()])
    }

    const delEmoji = (id) => {
        setEmojis(previousEmojis => previousEmojis.filter(emoji => emoji.id !== id))
    }

    const allHearts = () => {
        setEmojis(previousEmojis => previousEmojis.map(emoji => ({...emoji, emoji: '💚'})))
    }

    return (
        <>
        <div className="Emojis">
            {emojis.map(({id, emoji}) => (
                <span className="Emoji" key={id} onClick={() => delEmoji(id)}>{emoji}</span> 
                ))}
        <button type="button" onClick={addEmoji}>add emoji</button>
        <button type="button" onClick={allHearts}>all hearts</button>
        click emojis to delete
        </div>
        </>
    )
}

export default Emojis