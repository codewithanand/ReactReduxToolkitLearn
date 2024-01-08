import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { BiSolidSend } from "react-icons/bi";

import './todoinput.scss'
import { addTodo } from '../../features/todos/todoSlice';

const TodoInput = () => {
  const dispatch = useDispatch(state => state.todos)
  const [todoText, setTodoText] = useState("")

  const handleTextInput = (event) => {
    setTodoText(event.target.value)
  }

  const handleBtnClick = () => {
    const todoItem = {
      id: nanoid(),
      text: todoText
    }
    dispatch(addTodo(todoItem))
    setTodoText("")
  }


  return (
    <div className='todo-input'>
      <input type='text' placeholder='Write something...' onChange={handleTextInput} value={todoText} />
      <button onClick={handleBtnClick}><BiSolidSend /></button>
    </div>
  )
}

export default TodoInput