import React from 'react';
import './todo.css';

const Form = ({ setInputText, todos, setTodos, inputText, counters, setCounters, inputURL }) => {
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setInputText('');
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
        setCounters({ createdCounter: counters.createdCounter++, editedCounter: counters.editedCounter, deletedCounter: counters.deletedCounter });
    };

    const FetchTodos = (e) => {
        e.preventDefault();
        fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
            // let fetchURL = inputURL;
            // console.log(fetchURL);
            // fetch(fetchURL)
            .then((response) => response.json())
            .then((getTodos) => {
                setTodos([
                    ...todos,
                    ...getTodos.map((el) => {
                        return {
                            ...el,
                            text: el.text,
                            id: Math.random() * 1000,
                            completed: el.isCompleted,
                            edit: false,
                            disableButtons: false,
                        };
                    }),
                ]);
            });
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" />
            <button onClick={submitTodoHandler} type="submit">
                Add
            </button>
            {/* <input value={inputURL} type="text" /> */}
            <button className={'serverbutton'} onClick={FetchTodos}>
                Download on URL
            </button>
        </form>
    );
};
export default Form;
