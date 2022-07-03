import React from 'react';
import './todo.css';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setInputText('');
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    };

    const FetchTodos = (e) => {
        e.preventDefault();
        fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
            .then((response) => response.json())
            .then((getTodos) => {
                setTodos([
                    ...todos,
                    ...getTodos.map((item) => {
                        return {
                            ...item,
                            text: item.text,
                            id: Math.random() * 1000,
                            completed: item.isCompleted,
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
            {/* <input className={!compliteOn ? 'complete' : ''} type="text" disabled={redactOn} defaultValue={text} onChange={redactItemTaskHandler} /> */}
            <button onClick={submitTodoHandler} type="submit">
                ADD
            </button>
            <button className={'serverbutton'} onClick={FetchTodos}>
                Download List on server
            </button>
        </form>
    );
};
export default Form;
