import React from 'react'




export default function  Star(props){

    // function toggleFavorite(){
    //     console.log("Pembe")
    // }

    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

    return(
        <button
        aria-label={buttonLabel}
        onClick={props.handleClick}
        >
        <img
                src={`../images/${starIcon}`} 
                alt="star icon."
                className="card--favorite"
                />
        </button>
    )


}
