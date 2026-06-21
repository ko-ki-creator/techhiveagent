import Image from "next/image";
import styles from "./PhaseCard.module.css";

export default function PhaseCard({
    phase,
    phaseTitle,
    src,
    alt,
    title,
    text,
    tags = [],
    className = '',
    typeClassName = '',
}) {
    return (
        <>
            <div className={`${styles.phase} ${className ? `${className}` : ''}`}>
                <div className={` ${styles.type} ${typeClassName}` }>
                    <span className={styles.small}>{phase}</span>
                    <h2 className={styles.phase_title}>{phaseTitle}</h2>
                </div>
                <Image
                    src={src}
                    alt={alt}
                    width={72}
                    height={72}
                    className={styles.phase_img}
                />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
                {tags.length > 0 && (
                    <div className={styles.tag_group}>
                        <ul className={styles.tag_list}>
                            {tags.map((tag) => (
                                <li key={tag} className={styles.tag_item}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}