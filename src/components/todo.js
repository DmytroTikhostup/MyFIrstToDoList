import React from 'react';
import './todo.css';

const Todo = ({ text, todo, todos, setTodos, setEditText, editText }) => {
    // function --- Delete Task

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

    const changeHandler = () => {
        setEditText(todo.text);
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return {
                        ...el,
                        edit: !el.edit,
                        text: todo.edit ? editText : todo.text,
                    };
                }
                return el;
            })
        );
    };

    return (
        <div>
            <li className={`listTextString ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completeHandler}>Done!</button>
            <button onClick={changeHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};
export default Todo;
