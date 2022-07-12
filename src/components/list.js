import React from 'react';
import Todo from './todo';
import './todo.scss';
import styled from 'styled-components';

const wrapperStyledOl = styled.ol`
    width: auto;
    font-size: 16px;
    margin: 0 20% 0 20%;
    text-align: left;
`;

const List = ({ todos, setTodos, setEditText, counters, setCounters }) => {
    return (
        <div>
            <wrapperStyledOl>
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
            </wrapperStyledOl>
        </div>
    );
};
export default List;
