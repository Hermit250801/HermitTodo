import React, { useState } from 'react'
import styles from '../assets/css/todolist.module.css'
import clsx from "clsx"
function CheckBox(props) {
  const selectedCheckBoxHandler = (e) => {
    let checked = e.target.checked;
     props.setTodos(props.todos.map(item => {
       if(item.id === props.todo.id) {
          item.completed = checked;
          return {
            ...item,
            completed: checked
          }
       }
       props.setNewTodos(props.todos);
       return item;
     }));
  }
  return (
    <input onChange={selectedCheckBoxHandler} checked={props.todo.completed} type="checkbox" className={clsx(styles.inputCheckbox)} />
  )
}

export default CheckBox