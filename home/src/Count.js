import React from "react"

export default function Count() {
    //Define state variables

    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    // Log that the component is rendered
    console.log("Component rendered")
    
    // side effects
    // Define side effects using React.useEffect()
    React.useEffect(function() {
        // This effect runs when the component mounts or updates

        console.log("Effect ran")
        // Example side effect: fetching Star Wars data (currently commented out)
        // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }, [count])
    
    // Return JSX for rendering
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


