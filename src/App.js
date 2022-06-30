import React, { useState } from 'react';
import './App.css';

import Form from './components/form';
import List from './components/list';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [editText, setEditText] = useState('');
    return (
        <div className="App">
            <header className="App-header">
                <h1>My first ToDo List on React </h1>
            </header>
            <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
            <List setTodos={setTodos} todos={todos} />
        </div>
    );
}

export default App;
