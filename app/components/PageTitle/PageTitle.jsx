import styles from './PageTitle.module.css';

export default function PageTitle({ title, subTitle, text }) {
    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.sub_title}>{subTitle}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </>
    );
}