import React, { useEffect, useState } from 'react';
import Todo from './todo';

// create counters --------
const Counter = (props, { setTodos }) => {
    const [createdCount, setCreatedCount] = useState(props.createdCount);
    const [editedCount, setEditCount] = useState(props.editedCount);
    const [deletedCount, setDeletedCount] = useState(props.deletedCount);
    useEffect(() => {
        getLocalTodos(
            JSON.stringify({
                created: createdCount,
                edited: editedCount,
                deleted: deletedCount,
            })
        );
    }, [createdCount, editedCount, deletedCount]);

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            return localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
        return {
            createdCount: 0,
            updatedCount: 0,
            deletedCount: 0,
        };
    };

    return (
        <div>
            <p>Statistic my ToDo List</p>
            <p>Created Tasks: {createdCount}</p>
            <p>Edited Tasks: {editedCount}</p>
            <p>Deleted Tasks: {deletedCount}</p>
        </div>
    );
};
export default Counter;
