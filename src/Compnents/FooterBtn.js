import React from 'react'
import styles from '../assets/css/footer.module.css'
import clsx from "clsx"
function FooterBtn(props) {


  return (
    <div className={styles.footerBtnWrapper}>
        <a className={clsx(styles.btn ,styles.btnAdd, styles.selected)}></a>
        <a className={clsx(styles.btn ,styles.btnSearch)}></a>
       
    </div>
  )
}

export default FooterBtn