import React from "react"


/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
export default function Card(props){
  console.log(props)
    return(
        <div className="card">
          <img 
          src={`../images/${props.img}`}
          className="card--image" 
          alt="IMain Card image"
          />
          <div className="card--stats">
            <img 
            src = "./images/star.png" 
            className="card--star"
            alt="Star icon. "
            />
            <span>5.0</span>
            <span className="gray">{props.reviewCount}</span>
            <span className="gray">{props.country}</span>
          </div>
          <h2>{props.title}</h2>
          <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )

}