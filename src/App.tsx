import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import Title from './components/Title';
import TodoListUl from './components/TodoListUl';

import { todoObject } from './types';

export default function App() {
  const userName = "Mar";
  const [todos, setTodos] = useState<todoObject[]>([
    {id: 0,
      item: "Reading my book",
      isCompleted: false,
      description: "Extended description",
      priority: "mild"
    }, 
    {id: 1,
      item: "Washing dishes",
      isCompleted: false,
      description: "Extended description",
      priority: "mild"
    },
    {id: 2,
      item: "Practice coding",
      isCompleted: false,
      description: "Extended description",
      priority: "mild"
    }
  ])

const addTodos = (todo : todoObject) => {
  console.log(todo)
  setTodos([...todos, todo])
}

const deleteItem = (id : number) => {
  const todosUpdate = todos.filter(item => id != item.id)
  console.log("todos after splice: ", todos)
  console.log("todosUpdate: ", todosUpdate)
  setTodos(todosUpdate)

  // With splice when array
  // const newTodos = [...todos]
  // newTodos.splice(index, 1)
  // console.log(newTodos)
  // setTodos(newTodos)
}

const toggleCompleted = (id: number) => {
  setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
  );
};
  
  // const [inputValue, setInputValue] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (inputValue.trim()) {
  //     setTodos([...todos, inputValue])
  //   }
  //   setInputValue('')
  // }

  return (
    <>
      <header>
        To Do List
      </header>
      <Title name={userName} />
      <TodoListUl todos={todos} onDelete={(id : number)=>deleteItem(id)} onToggleCompleted={toggleCompleted} />
      <p>
        You currently have <span className= {todos.length > 6 ? 'text-danger' : 'text-success'}>{todos.length}</span> todo items in your list!
      </p>

      <TodoForm addTodos={addTodos}/>
    </>
  )
}
