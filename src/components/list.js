import React from 'react';
import Todo from './todo';

const List = ({ todos, setTodos, setEditText }) => {
    return (
        <div>
            <ol>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} text={todo.text} setTodos={setTodos} todos={todos} setEditText={setEditText} />
                ))}
            </ol>
        </div>
    );
};
export default List;
