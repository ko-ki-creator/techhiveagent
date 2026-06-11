import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className={style.wrapper}>

          {/* メインビジュアル */}
          <div className={style.main_visual}>
            <Image
              src="/images/fv.jpg"
              alt="メインビジュアルの画像"
              fill
              className={style.mv}
            />
            <div className={style.mv_copy}>
              <p className={style.sub_copy}>HR×AI AGENT</p>
              <h1 className={style.main_copy}>TechHive<br />Agent</h1>
              <p className={style.mv_text}>
                HR領域特化のAIエージェントプラットフォーム。<br />
                どんな業務環境にもオーダーメイドでAIを実装します。
              </p>
              <div className={style.mv_btn}>
                <Link href="/contact" className={style.contact_btn}>
                  <span className={style.contact_btn_text}>お問い合わせ・商談予約 →</span>
                </Link>
                <Link href="/contact" className={style.consul_btn}>
                  <span className={style.consul_btn_text}>オンライン相談（30分） →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* AGENT IN ACTION */}
          
        </div>
      </main>
    </div>
  );
}
