import Link from "next/link";
import style from "../../page.module.css";

export default function ExploreCard({ href, sectionName, title, description, detailText }) {
    return (
        <Link
            href={href}
            className={style.explore_btn}
            aria-label={`${sectionName} ${title}`}
        >
            <p className="section_name">{sectionName}</p>
            <h3 className={style.explore_ttl}>{title}</h3>
            <p className={style.explore_text}>{description}</p>
            <p className={style.detail_btn}>{detailText}</p>
        </Link>
    );
}
