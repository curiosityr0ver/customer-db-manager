import React from 'react'
import './ZigZag.css'
export default function ({ onLeftClick, onRightClick }) {
    return (
        <div class='pair'>
            <div class="gallery">
                <img onClick={onLeftClick} src={require("../StarWars/add1.png")} alt="Archer from Fate/Stay" />
                <img onClick={onRightClick} src={require("../StarWars/add2.png")} alt="Saber from Fate/Stay" />
            </div>
        </div>
    )
}
