import React, { useEffect, useState } from 'react';
import './App.css';

import Form from './components/form';
import List from './components/list';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        savelocalStorage();
    });

    // // create counters --------
    // const [createdCount, setCreatedCount] = useState(createdCount);
    // const [editedCount, setUpdatedCount] = useState(editedCount);
    // const [deletedCount, setDeletedCount] = useState(deletedCount);
    // useEffect(() => {
    //     getLocalTodos(
    //         JSON.stringify({
    //             created: createdCount,
    //             edited: editedCount,
    //             deleted: deletedCount,
    //         })
    //     );
    // }, [createdCount, editedCount, deletedCount]);

    const savelocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            return localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
        return {
            createdCount: 0,
            editedCount: 0,
            deletedCount: 0,
        };
    };

    return (
        <div className="App">
            <header>
                <h1 className="App-header">My first ToDo List on React </h1>
                <p>Statistic my ToDo List</p>
                <p>Created Tasks: {}</p>
                <p>Edited Tasks: {}</p>
                <p>Deleted Tasks: {}</p>
            </header>
            <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
            <List setTodos={setTodos} todos={todos} />
        </div>
    );
}

export default App;
