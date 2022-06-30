import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setInputText('');
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" />
            <button onClick={submitTodoHandler} type="submit">
                ADD
            </button>
        </form>
    );
};
export default Form;
