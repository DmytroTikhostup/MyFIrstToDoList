import React from 'react';
import Todo from './todo';
import './todo.css';

const List = ({ todos, setTodos, setEditText, counters, setCounters }) => {
    return (
        <div>
            <ol>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                        setTodos={setTodos}
                        todos={todos}
                        setEditText={setEditText}
                        counters={counters}
                        setCounters={setCounters}
                    />
                ))}
            </ol>
        </div>
    );
};
export default List;
