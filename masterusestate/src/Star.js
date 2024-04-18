import React from 'react'


export default function  Star(props){

    // function toggleFavorite(){
    //     console.log("Pembe")
    // }

    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
// const StartIcon = propd.isFilled? "star-filled.png" : "star-empty"
    return(

        <button
            onClick={props.handleClick}
            aria-label={buttonLabel}
            aria-pressed={props.isFilled}
            className="card--favorite-button"
        >
        <img
                src={`../images/${starIcon}`} 
                alt="star icon."
                className="card--favorite"
                />
        </button>
    )


}
