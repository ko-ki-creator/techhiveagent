import styles from './AreaCard.module.css';

export default function AreaCard({ areaNumber, title, text }) {
    return(
        <>
            <div className={styles.area}>
                <p className={styles.area_number}>{areaNumber}</p>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
            </div>
        </>
    );
}