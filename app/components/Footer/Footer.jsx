import Image from "next/image";
import Link from "next/link";
import style from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <h2 className={style.footer_ttl}>Driving HR<br />with <span className={style.ai}>AI</span> technologies</h2>
            <div className={style.footer_nav}>
                <nav className={style.nav}>
                    <ul className={style.nav_ul}>
                        <li className={style.nav_li}>
                            <Link href="/" className={style.li_item}>TOP</Link>
                        </li>
                        <li className={style.nav_li}>
                            <Link href="/methdology" className={style.li_item}>METHODOLOGY</Link>
                        </li>
                        <li className={style.nav_li}>
                            <Link href="/technology" className={style.li_item}>TECHNOLOGY</Link>
                        </li>
                        <li className={style.nav_li}>
                            <Link href="/hybrid" className={style.li_item}>HYBRID</Link>
                        </li>
                        <li className={style.nav_li}>
                            <Link href="/about" className={style.li_item}>ABOUT</Link>
                        </li>
                    </ul>
                </nav>
                <Link href="/" className={style.contact_btn}>
                    <Image
                        src="/images/mail_icon.svg"
                        alt="メールアイコン"
                        width={20}
                        height={16}
                    />
                    <p className={style.contact_text}>CONTACT</p>
                </Link>
            </div>
            <div className={style.company}>
                <p>株式会社Asikaze</p>
                <p>[本社] 〒150-0042 東京都渋谷区宇田川町36−2 ノア渋谷1005</p>
            </div>
            <small className={style.copyright}>© Asikaze. All Rights Reserved.</small>
            <Image
                src="/images/hexagon_blue.png"
                alt="六角形の装飾 青"
                width={360}
                height={360}
                className={style.hexagon_blue}
            />
            <Image
                src="/images/hexagon_darkblue.png"
                alt="六角形の装飾 濃青"
                width={350}
                height={350}
                className={style.hexagon_darkblue}
            />
            <Image
                src="/images/hexagon_green.png"
                alt="六角形の装飾 緑"
                width={240}
                height={240}
                className={style.hexagon_green}
            />
            <Image
                src="/images/hexagon_purple.png"
                alt="六角形の装飾 紫"
                width={240}
                height={240}
                className={style.hexagon_purple}
            />
            <Image
                src="/images/hexagon_line_blue.png"
                alt="六角形の装飾 青"
                width={150}
                height={150}
                className={style.hexagon_line_blue}
            />
            <Image
                src="/images/hexagon_line_green.png"
                alt="六角形の装飾 緑"
                width={205}
                height={205}
                className={style.hexagon_line_green}
            />
            <Image
                src="/images/hexagon_line_purple.png"
                alt="六角形の装飾 紫"
                width={130}
                height={130}
                className={style.hexagon_line_purple}
            />
        </footer>
    )
}