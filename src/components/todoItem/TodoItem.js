import React from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

import './todoitem.scss'
import { deleteTodo, toggleTodo } from "../../features/todos/todoSlice";

const TodoItem = ({todo}) => {
    const dispatch = useDispatch(state => state.todos)

    const handleCheck = () => {
        dispatch(toggleTodo({id: todo.id}))
    }

    const handleDelBtn = () => {
        dispatch(deleteTodo({id: todo.id}))
    }

    return (
        <div className="list-item">
            <div className="list-item-wrapper">
                <input className="list-item-check" type="checkbox" onChange={handleCheck} checked={todo.completed} />
                <span className={`list-item-text ${todo.completed ? "list-item-completed" : ""}`}>{todo.text}</span>
            </div>
            <div className="list-item-btn" onClick={handleDelBtn}>
                <MdDelete className="delete-icon" />
            </div>
        </div>
    );
};

export default TodoItem;
