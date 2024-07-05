import React, { useState } from "react";

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTodos([...todos, task])
    }
    setTask('')
    return
  }

  const deleteTask = (item) => {
    setTodos(todos.filter((element) => element !== item))
  }

  return (
    <div className="container">
      <h1 className="text-center text-secondary mb-2">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <span htmlFor="randomInput" className="form-label">New Task</span>
          <input type="text" className="form-control" id="exampleInput"
            value={task} onChange={(event) => setTask(event.target.value)} />
        </div>
      </form>
      <h2 className="text-start text-black">List</h2>
      <ul className="list-group">
        {todos.map((item, index) =>
          <li key={index} className="list-group-item hidden-icon d-flex justify-content-between">
            {item}
            <div  onClick={() => deleteTask(item)}>
              <i className="fas fa-trash text-danger"></i>
            </div>
          </li>)}
      </ul>
      <div>
        <ul>
      <li className="list-group-item text-end">{todos.length} tasks</li>
        </ul>
      </div>
    </div>
  )

}

















/* export const TodoList = () => {{
    

    if (task.trim() !== ''){
        setTodos([...todos, task])
    }
    setTask('')
}
const deleteTask = (item) => {
    setTodos(todos.filter((element) => element !== item))
}

return (
    <div className="container">
        <h2 className="text-center text-success">Todo List</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">New Task</label>
                <input type="text" className="form-control" id="exampleInput"
                value={task} onChange={(event) => setTask(event.target.value)}/>
            </div>
        </form>
        <div>
        <ul className="list-group">
            {todos.map((item, index) => 
            <li key={index} className="list-group-item hidden-icon d-flex justify-content-between">
            {item}
            <span onClick={() => deleteTask(item)}>
                <i className="fas fa-trash text-danger"></i>
            </span>
            </li> )}
            <li className="list-group-item text-end">{todos.length} tasks</li>
        </ul>
        </div>


    </div>
)
} */