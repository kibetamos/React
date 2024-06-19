import React from "react";

export default function Task(){
    const[tasks, setTasks] = React.useState([

        { id: 1, name: "Buy groceries", isCompleted: true },
        { id: 2, name: "Walk the dog", isCompleted: true },
        { id: 3, name: "Do laundry", isCompleted: true },
]);



return(
    <div>
    {tasks.map(task => (
        <p key={task.id}>
           {task.id} 
           
           .{task.name} 

           <input 
            type="checkbox"
            id="isComplete"
            checked={task.isCompleted}
            name="isCompleted"
            />
        </p>

    ))},
    
    
        </div>
);

}