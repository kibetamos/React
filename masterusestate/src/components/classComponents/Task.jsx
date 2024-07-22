import React   from "react";

const Task = ({ name }) =>{

    const[todo, setTodos] = React.useState(["Just some demo tasks", "As an example"])
    const [inputVal, setInputVal] = React.useState("")
    
    
    const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal("")
};


const handleInputChange = (e) => {

}
    return (
        <section>
            <h3>{name}</h3>
            <form onSubmit={handleSubmit}>

            <label htmlFor="task-entry">Enter a task: </label>
                <input 
                name="task"
                type="text"
                value={inputVal}
                onChange={handleInputChange}

                />

                <button>Submit</button>
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