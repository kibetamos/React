import React from "react";

export default function Task(){
    const[tasks, setTasks] = React.useState([
    { id: 1, name: "Buy groceries", isCompleted: false },
    { id: 2, name: "Walk the dog", isCompleted: true },
    { id: 3, name: "Do laundry", isCompleted: false },
]);



return(
    <div>
    {tasks.map(task => (
        <p key={task.id}>
            {task.name}
        </p>
    ))}
        </div>
);

}