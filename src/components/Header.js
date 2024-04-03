import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll2.jpeg" 
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}