import React from 'react';
import styles from './AnthropicCard.module.css';

export default function AnthropicCard({ number, titleTop, titleBottom, text }) {
    return (
        <>
            <div className={styles.anthropic_group}>
                <p className={styles.number}>{number}</p>
                <div className={styles.title_container}>
                    <h2 className={styles.title}>{titleTop}</h2>
                    <h2 className={styles.title}>{titleBottom}</h2>
                </div>
                <p className={styles.text}>{text}</p>
            </div>
        </>
    );
}
