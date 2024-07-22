import React   from "react";

const Task = ({ name }) =>{

    const[todo, setTodos] = React.useState(["Just some demo tasks", "As an example"])
    const [inputVal, setInputVal] = React.useState("")

const handleInputChange = (e) => {

}
    return (
        <section>
            <h3>{name}</h3>
            <form>

            <label htmlFor="task-entry">Enter a task: </label>
                <input 
                name="task"
                type="text"
                value={inputVal}
                onChange={handleInputChange}

                />

                <button>Submot</button>
            </form>
        
        <h4>All the Tasks</h4>

        <ul>
            {setTodos.map((todo) => (
                <li key={todo}>{todo}</li>
            ))}
        </ul>
        </section>
    );


}

export default Task