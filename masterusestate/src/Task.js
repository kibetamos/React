import React from "react";

export default function Task(){
    const[tasks, setTasks] = React.useState([

        { id: 1, name: "Buy groceries", isCompleted: false },
        { id: 2, name: "Walk the dog", isCompleted: false },
        { id: 3, name: "Do laundry", isCompleted: false },
]);

// const handleChange = (taskId) => {
//     setTasks(tasks.map(task => {
//         if (task.id === taskId) {
//             return { ...task, isCompleted: !task.isCompleted };
//         }
//         return task;

        
//     }));
function handleChange(e) {
    const {name, value, type, checked} = e.target
    // setTasks(prevtasks => {
    //     return {
    //         ...prevtasks,
    //         // [event.target.name]: event.target.value
    //         [name]: type === "checkbox" ? checked : value
    //     }
    // })
}

    // console.log(tasks.isCompleted)



function handleSubmit(event){
    event.preventDefault()

    console.log(tasks)

}
return(
    <div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Add Task"
            onChange={handleChange}
            name="tsask"
            // value={formData.firstName}
            />

            <button>Add Task</button>
</form>

        {tasks.map(task => (
        <h2 key={task.id}>
           {task.id} 
           
           .{task.name} 

           <input 
            type="checkbox"
            id="isComplete"
            onChange={handleChange}
            checked={task.isCompleted}
            name="isCompleted"
            />
        </h2>

    ))},
            
    
    
        </div>
);

}