import React from "react"
import "./Video_card.css"


export default function Video_card({image, name}){
    return(
        <div className="card">
            <img src={image} alt="video" />
            <h2 className="title">{name}</h2>

        </div>
    )
}