import React from 'react'




export default function  Star(props){

    // function toggleFavorite(){
    //     console.log("Pembe")
    // }

    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

    return(
        <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={props.handleClick}
                    />
    )


}
