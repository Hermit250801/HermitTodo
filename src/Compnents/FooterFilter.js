import React, {useState} from 'react'
import styles from '../assets/css/footer.module.css'
import clsx from 'clsx'



function FooterFilter(props) {
    return (
        <ul className={styles.footerListFilter}>
            <li className={styles.footerItemFilter}>
                <a onClick={props.fillterAll} className={clsx(styles.footerFilter, {
                    [styles.selectedFilter]: props.allSelected
                })}>All</a>
            </li>

            <li className={styles.footerItemFilter}>
                <a onClick={props.fillterActive} className={clsx(styles.footerFilter, {
                    [styles.selectedFilter]: props.activeSelected
                })}>Active</a>
            </li>

            <li className={styles.footerItemFilter}>
                <a onClick={props.fillterCompleted} className={clsx(styles.footerFilter, {
                    [styles.selectedFilter]: props.completedSelected
                })}>Completed</a>
            </li>
        </ul>
    )
}

export default FooterFilter