import React from 'react'
import './ZigZag.css'
export default function ({ onLeftClick, onRightClick }) {
    return (
        <div class='pair'>
            <div class="gallery">
                <img onClick={onLeftClick} src="https://assets.codepen.io/1480814/archer.jpg" alt="Archer from Fate/Stay" />
                <img onClick={onRightClick} src="https://assets.codepen.io/1480814/saber.jpg" alt="Saber from Fate/Stay" />
            </div>
        </div>
    )
}
