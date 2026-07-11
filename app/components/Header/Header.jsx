"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
    // ハンバーガーメニューの開閉状態管理
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.top_logo}>
                <Image
                    src="/images/Logo_TechHive-Agent.svg"
                    alt="TechHiveAgentのロゴ"
                    width={64}
                    height={64}
                    className={styles.logo}
                />
                <h1 className={styles.top}>TechHive Agent</h1>
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
            <div className={styles.ham_menu}>
                <button
                    className={` ${styles.ham_btn} ${isOpen ? styles.open : ''} `} /* テンプレートリテラルで動的にクラスを切り替え */
                    onClick={toggleMenu}
                    aria-label="メニュー" /*アクセシビリティに配慮*/
                >
                    <span className={styles.ham_line} />
                    <span className={styles.ham_line} />
                    <span className={styles.ham_line} />
                </button>

                {/* 条件付きレンダリング：メニューが開いているといだけドロップダウンを表示 */}
                {isOpen && (
                    <>
                        <div
                            // オーバーレイの実装
                            className={styles.menu_overlay}
                            onClick={() => setIsOpen(false)} // クリックするとメニューが閉じる
                        />
                        <div className={styles.menu_dropdown}>
                            <ul className={styles.sidebar_ul}>
                                <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/">TOP</Link></li>
                                <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/methodology">METHODOLOGY</Link></li>
                                <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/technology">TECHNOLOGY</Link></li>
                                <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/hybrid">HYBRID</Link></li>
                                <li className={styles.sidebar_li} onClick={closeMenu}><Link href="https://www.asikaze.com/about" target="_blank">ABOUT</Link></li>
                                <li className={styles.sidebar_li} onClick={closeMenu}><Link href="/contact">CONTACT</Link></li>
                            </ul>
                        </div>
                    </>
                )}

            </div>

        </header>
    )
}