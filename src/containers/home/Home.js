import React, { useEffect, useState } from 'react'

import TodoItem from '../../components/todoItem/TodoItem';
import TodoInput from '../../components/todoinput/TodoInput';
import Filter from '../../components/filter/Filter';

import './home.scss'
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const Home = () => {
  const todos = useSelector(state => state.todos)
  const status = useSelector(state => state.filters.status)
  const [todoItems, setTodoItems] = useState([])

  useEffect(() => {
    switch (status) {
      case 0:
        setTodoItems(
          todos.map(todo => <TodoItem key={nanoid()} todo={todo} />)
        )
        break
      case 1:
        setTodoItems(
          todos.map(todo => {
            if(todo.completed === false){
              return <TodoItem key={nanoid()} todo={todo} />
            }
            return []
          })
        )
        break
      case 2:
        setTodoItems(
          todos.map(todo => {
            if(todo.completed === true){
              return <TodoItem key={nanoid()} todo={todo} />
            }
            return []
          })
        )
        break
      default:
        setTodoItems(
          todos.map(todo => <TodoItem key={nanoid()} todo={todo} />)
        )
        break
    }
  }, [status, todos])

  return (
    <div className='container'>
      <div className="wrapper">
        <TodoInput />
        <Filter />
        {todoItems}
      </div>
    </div>
  )
}

export default Home