import React, { useState } from 'react'
import styles from '../assets/css/todolist.module.css'
import clsx from "clsx"
import CheckBox from '../Compnents/CheckBox'
import RemoveBtn from './RemoveTodo'
function TodoList(props) {

    return (
        <ul className={styles.todoList}>
            {props.newTodos.length !== 0 ? props.newTodos.map(todo => (
                <li key={todo.id} className={styles.todoItem}>
                    <div className={styles.checkbox}>
                        <label className={clsx(styles.checkboxLabel, {
                            [styles.completed]: todo.completed
                        })}>
                            <CheckBox
                                todos={props.todos}
                                todo={todo}
                                setTodos={props.setTodos}
                                setNewTodos={props.setNewTodos}
                                setSelected={props.setSelected}
                            />
                            {todo.text}
                        </label>
                    </div>
                    <div>
                        <RemoveBtn newTodos={props.newTodos}
                            setNewTodos={props.setNewTodos} setTodos={props.setTodos} todo={todo} />
                    </div>
                </li>
            )) : <li className={styles.noItem}>
                There are no items
            </li>}
        </ul>
    )
}

export default TodoList