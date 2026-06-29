import React from 'react'
import styles from './CaseCard.module.css'

export default function CaseCard({ number, title, text }) {
    return (
        <>
            <div className={styles.case}>
                <p className={styles.number}>{number}</p>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </>
    )
}
