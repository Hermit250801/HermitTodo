import React from 'react'
import styles from '../assets/css/todolist.module.css'
import clsx from "clsx"
function RemoveBtn(props) {
    const deleteHandler = () => {
        const filterNewTodos = props.newTodos.filter((el) => el.id !== props.todo.id);
        props.setNewTodos(filterNewTodos);
        props.setTodos(filterNewTodos);
      }
  return (
    <a onClick={deleteHandler} className={clsx(styles.btn ,styles.btnRemove)}></a>
  )
}

export default RemoveBtn