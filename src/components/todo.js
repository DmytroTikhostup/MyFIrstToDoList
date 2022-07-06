import React, { useState } from 'react';
import Counter from './counter';
import './todo.css';

const Todo = ({ text, todo, todos, setTodos, counters, setCounters }) => {
    // function --- Delete Task

    const [isEdit, setIsEdit] = useState(false);
    const [todoText, setTodoText] = useState(text);

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        setCounters({ createdCounter: counters.createdCounter, editedCounter: counters.editedCounter, deletedCounter: counters.deletedCounter + 1 });
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
        setTodoText(value);
    };

    const editHandler = () => {
        setIsEdit(true);
    };

    const saveHandler = (event) => {
        const value = event.currentTarget.value;

        setCounters({ createdCounter: counters.createdCounter, editedCounter: counters.editedCounter + 1, deletedCounter: counters.deletedCounter });
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
                    <input type="text" value={todoText} onChange={changeHandler} onBlur={saveHandler} />
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
