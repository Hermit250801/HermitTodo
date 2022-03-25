import React from 'react'
import styles from '../assets/css/footer.module.css'
import FooterBtn from './FooterBtn'
import FooterCountCompleted from './FooterCountCompleted'
import FooterFilter from './FooterFilter'
function Footer(props) {
  return (
    <div className={styles.footer}>
        <FooterBtn setNewTods={props.setNewTodos} />
        <FooterCountCompleted todos={props.todos} />
        <FooterFilter allSelected={props.allSelected} activeSelected={props.activeSelected} completedSelected={props.completedSelected}
         fillterAll={props.fillterAll} fillterActive={props.fillterActive} fillterCompleted={props.fillterCompleted}
        todos={props.todos} setTodos={props.setTodos} />
    </div>
  )
}

export default Footer