import {useState} from 'react'

const TodoForm = ({addTodos}) => {
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodos(inputValue)
    }
    setInputValue('')

  }
  const [inputValue, setInputValue] = useState('')

  return (
    <form className="input-container" onSubmit={handleSubmit}>
    <input className="todo-input" placeholder='Add new to do'type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}></input>
    <button type="submit">Add to-do</button>
  </form>
  )
}

export default TodoForm