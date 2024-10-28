import React from 'react'
import "./todo.css"
import { todoObject } from '../types'

type TodoListUlProps = {
  todos: todoObject[];
  onDelete: (id: number) => void;
  onToggleCompleted: (id: number) => void
}

const TodoListUl = ({todos, onDelete, onToggleCompleted} :TodoListUlProps ) => {
    // console.log("from UL: ", todos)
  return (
    <ul className="todo-list card">
      <li className="todo-card header">
        <h4>To Do:</h4>
        <h4>Priority:</h4>
        <h4>Done:</h4>
        <h4>Actions:</h4>
      </li>
    {todos.map((todo : todoObject) => (
      <li className="todo-card item" key={todo.id}>
        <p>{todo.item}</p>
        <p>{todo.priority}</p>
        <input  type="checkbox"
            checked={todo.isCompleted}
            onChange={() => onToggleCompleted(todo.id)} />
        <button onClick={()=>onDelete(todo.id)}>
            Delete
        </button>
    </li>
    ))}
  </ul>
  )
}

export default TodoListUl