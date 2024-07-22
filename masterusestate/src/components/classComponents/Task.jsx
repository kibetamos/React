import React   from "react";

const Task = ({ name }) =>{

    const[todos, setTodos] = React.useState(["Just some demo tasks", "As an example"])
    const [inputVal, setInputVal] = React.useState("")



    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    };   
    
const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal("")
};



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
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
        </section>
    );


}

export default Task