import React, {useRef} from 'react'
import styles from '../assets/css/header.module.css'
function Header(props) {
    const inputRef = useRef()
    const inputTextHandler = e => {
        props.setInputTodo(e.target.value);
    }

    const addTodoItemHandler = e => {
        if(e.keyCode === 13) {
            props.setTodos([ ...props.todos,
                {text: props.inputTodo, id: Math.random() * 1000, completed: false}])
            props.setNewTodos([ ...props.todos,
                {text: props.inputTodo, id: Math.random() * 1000, completed: false}]);
            props.setInputTodo("");
        }
    }

    return (
        <header>
            <h1 className={styles.heading}>Things To Do</h1>
            <input
                type="text"
                ref={inputRef}
                value={props.inputTodo}
                placeholder={props.name}
                className={styles.input} 
                onChange={inputTextHandler}
                onKeyUp={addTodoItemHandler}
                />
        </header>
    )
}

export default Header