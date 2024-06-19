import React from "react";

export default function Task(){
    const [newTask, setNewTask] = React.useState("");
    const [filter, setFilter] = React.useState('all');
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


    // console.log(tasks.isCompleted)
    const handleCheckboxChange = (taskId) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        }));
    };

function filteredTasks() {
    if (filter === 'completed') {
        return tasks.filter(task => task.isCompleted);
    } else if (filter === 'notCompleted') {
        return tasks.filter(task => !task.isCompleted);
    } else {
        return tasks;
    }
    }

const handleTaskChange = (e) => {
        setNewTask(e.target.value);
    };

function handleSubmit(event){
    event.preventDefault();
    if (newTask.trim() !== "") {
        setTasks(prevTasks => [
            ...prevTasks,
            { id: prevTasks.length + 1, name: newTask, isCompleted: true },
        ]);
        setNewTask("");
    }

}


return(
    <div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Add Task"
            onChange={handleTaskChange}
            name="task"
            value={newTask}
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
                        onChange={() => handleCheckboxChange(task.id)}
                        checked={task.isCompleted}
                        name="isCompleted"
                    />
        </h2>

    ))},
     <button onClick={() => setFilter('all')}>All</button>       
    
    
        </div>
);

}