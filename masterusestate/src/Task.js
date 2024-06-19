import React from "react";

export default function Task(){
    const[tasks, setTasks] = React.useState([

        { id: 1, name: "Buy groceries", isCompleted: false },
        { id: 2, name: "Walk the dog", isCompleted: false },
        { id: 3, name: "Do laundry", isCompleted: false },
]);

const handleChange = (taskId) => {
    setTasks(tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, isCompleted: !task.isCompleted };
        }
        return task;

        
    }));

    console.log(tasks.isCompleted)
};

return(
    <div>
    {tasks.map(task => (
        <h2 key={task.id}>
           {task.id} 
           
           .{task.name} 

           <input 
            type="checkbox"
            id="isComplete"
            onChange={() => handleChange(task.id)}
            checked={task.isCompleted}
            name="isCompleted"
            />
        </h2>

    ))},
    
    
        </div>
);

}