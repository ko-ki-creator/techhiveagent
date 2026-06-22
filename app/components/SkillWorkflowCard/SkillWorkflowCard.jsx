import styles from "./SkillWorkflowCard.module.css";

export default function SkillWorkflowCard({
    title,
    text,
    number,
    className = '',
}) {
    return (
        <>
            <div className={`${styles.skill_workflow_card} ${className ? `${className}` : ''}`}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
                <p className={styles.number}>{number}</p>
            </div>
        </>
    );
}