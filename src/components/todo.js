import React, { useState } from 'react';
import Form from './form';
import './todo.css';

const Todo = ({ text, todo, todos, setTodos, editText, setEditText }) => {
    // function --- Delete Task

    const [isEdit, setIsEdit] = useState(false);
    const [todoText, setTodoText] = useState(text);

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    // function --- Done Task

    const completeHandler = () => {
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return { ...el, completed: !el.completed };
                }
                return el;
            })
        );
    };

    // function --- Edit Task

    const changeHandler = (event) => {
        const value = event.currentTarget.value;

        console.log(event.key);
        console.log(event.code);
        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code

        setTodoText(value);
    };

    const editHandler = () => {
        setIsEdit(true);
    };

    const saveHandler = (event) => {
        const value = event.currentTarget.value;

        setIsEdit(false);
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return {
                        ...el,
                        edit: !el.edit,
                        text: value,
                    };
                }
                return el;
            })
        );
    };

    return (
        <div>
            <li className={'listTextString'}>
                {isEdit ? (
                    <textarea type="text" value={todoText} onChange={changeHandler} onBlur={saveHandler} />
                ) : (
                    <span className={`${todo.completed ? 'completed' : ''}`}>{todoText}</span>
                )}
            </li>
            <button onClick={completeHandler}>Done!</button>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};
export default Todo;
