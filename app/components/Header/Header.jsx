"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/images/logo.png"
                    alt="TechHiveAgentのロゴ"
                    width={168}
                    height={58}
                />
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.nav_ul}>
                    <li className={styles.nav_li}>
                        <Link href="/" className={styles.li_item}>TOP</Link>
                    </li>
                    <li className={styles.nav_li}>
                        <Link href="/methodology" className={styles.li_item}>METHODOLOGY</Link>
                    </li>
                    <li className={styles.nav_li}>
                        <Link href="/technology" className={styles.li_item}>TECHNOLOGY</Link>
                    </li>
                    <li className={styles.nav_li}>
                        <Link href="/hybrid" className={styles.li_item}>HYBRID</Link>
                    </li>
                    <li className={styles.nav_li}>
                        <Link href="https://www.asikaze.com/about" target="_blank" className={styles.li_item}>ABOUT</Link>
                    </li>
                    <li className={styles.nav_li}>
                        <Link href="/contact" className={styles.contact_btn}>CONTACT</Link>
                    </li>
                </ul>
            </nav>

            {/* ハンバーガーメニュー（タブレット以下で表示） */}
            {/* <button
                className={styles.hamburger}
                onClick={toggleMenu}
            >
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
            </button>

            <div className={`${styles.sidebar} ${menuOpen ? styles.open : ''}`}>
                <ul className={styles.sidebar_ul}>
                    <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/">TOP</Link></li>
                    <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/methodology">METHODOLOGY</Link></li>
                    <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/technology">TECHNOLOGY</Link></li>
                    <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/hybrid">HYBRID</Link></li>
                    <li className={styles.sidebar_li} onClick={closeMenu}><Link href="https://www.asikaze.com/about" target="_blank">ABOUT</Link></li>
                    <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/contact">CONTACT</Link></li>
                </ul>
            </div> */}

        </header>
    )
}