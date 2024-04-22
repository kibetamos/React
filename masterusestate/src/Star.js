import React from 'react'

export default function  Star(props){
    // function toggleFavorite(){
    //     console.log("Pembe")
    // }
    // Itenary
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
// const StartIcon = propd.isFilled? "star-filled.png" : "star-empty"
    const buttonLabel = props.isFilled ? "Unmark as favorite" : "Mark as favorite"

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
