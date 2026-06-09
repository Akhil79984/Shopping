import { useState } from "react"

const TodoApp=()=>{
    const[Todo, setTodo]=useState();

    const addTodo=()=>{
        const newTodo={
            id= Date.row(),
            name="AKHIL",
            Role="developer"
        };
        setTodo(...Todo, newtask);


        const deleteTodo=(id)=>{
            const updateTodo = Todo.filter((todo)=>todo.id !==id)
        }
        setTodo(updatedtodo);

    }
    return(
    <div className="container">
        <div className="input-text">
        <h1>TodoApp</h1>
        <input type="text" value={task} placeholder="task" onChange={((e)=> setTask(e.target.value))}/>
        <button onClick={addTodo}>Add</button>
         </div>
        {
            todos.map((todo)=>(
                <div className="todo-item" key={todo.id}>
                <h3 onClick={()=> toggleComplete(todo.id)} 
                style={{textDecoration: todo.completed
                    ?"line-through":"none"}}>
                    {todo.text}
                </h3>
                </div>
            
                ))
            }

    </div>);
}

export default TodoApp;