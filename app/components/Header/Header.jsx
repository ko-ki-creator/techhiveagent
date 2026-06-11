import Image from "next/image";
import Link from "next/link";
import style from "./Header.module.css";

export default function Header() {
    return (
        <header className={style.header}>
            <Link href="/">
                <Image
                    src="/images/logo.png"
                    alt="TechHiveAgentのロゴ"
                    width={168}
                    height={58}
                />
            </Link>
            <nav className={style.nav}>
                <ul className={style.nav_ul}>
                    <li className={style.nav_li}>
                        <Link href="/" className={style.li_item}>TOP</Link>
                    </li>
                    <li className={style.nav_li}>
                        <Link href="" className={style.li_item}>METHODOLOGY</Link>
                    </li>
                    <li className={style.nav_li}>
                        <Link href="" className={style.li_item}>TECHNOLOGY</Link>
                    </li>
                    <li className={style.nav_li}>
                        <Link href="" className={style.li_item}>HYBRID</Link>
                    </li>
                    <li className={style.nav_li}>
                        <Link href="" className={style.li_item}>ABOUT</Link>
                    </li>
                    <li className={style.nav_li}>
                        <Link href="" className={style.contact_btn}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}