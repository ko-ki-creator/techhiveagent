import React from 'react'
import styles from './RoleCard.module.css'

export default function RoleCard({ number, title, text }) {
    return (
        <>
            <div className={styles.role_box}>
                <p className={styles.number}>{number}</p>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </>
    )
}
