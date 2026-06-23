import styles from './TierCard.module.css';

export default function TierCard({ className, number, title, textTop, textBottom, example }) {
    return (
        <>
            <div className={`${styles.tier} ${className || ''}`.trim()}>
                <div className={styles.number}>
                    <p className={styles.tier_number}>{number}</p>
                </div>
                <div className={styles.pentagon}>
                    <div className={styles.pentagon_inner}>
                        <h2 className={styles.title}>{title}</h2>
                        <div>
                            <p className={styles.text}>{textTop}</p>
                            <p className={styles.text}>{textBottom}</p>
                        </div>
                        <p className={styles.example}>{example}</p>
                    </div>
                </div>
            </div>
        </>
    );
}