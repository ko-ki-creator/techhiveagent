import styles from "./SectionTitle.module.css"

export default function SectionTitle({ sectionName, title, text }) {
    return (
        <>
            <div className={styles.wrapper}>
                <p className={styles.section_name}>{sectionName}</p>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
            </div>
        </>
    );
}