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
          <section className={style.agent_in_action}>
            <div className={style.agent_in_action_wrapper}>
              <div className={style.agent_in_action_inner}>
                <p className="section_name">AGENT IN ACTION</p>
                <h2 className="section_ttl">人事のサポーター、<br />本日も稼働中。</h2>
                <p className={style.text}>
                  TechHive Agent は24時間365日、人事の定常業務を代行し、 人間の介入が必要なものとそうじゃないものを判断します。AIモデルの進化に伴い能力は上がり、退職しないため、業務の習熟度も使い続けるほどに高まり続けます。
                </p>
                <hr className={style.line} />
                <div className={style.number_mark}>
                  <p className={style.sub_text}>労働者派遣 13-317727</p>
                  <p className={style.sub_text}>プライバシーマーク 21005002(01)</p>
                </div>
              </div>
              <Image
                src="/images/agent_card.jpg"
                alt="AIエージェントカード"
                width={315}
                height={320}
                className={style.agent_card}
              />
            </div>
          </section>

          {/* THE NUMBERS */}
          <section className={style.the_numbers}>
            <div className={style.the_numbers_wrapper}>
              <div className={style.the_numbers_inner}>
                <p className={style.section_name_white}>THE NUMBERS</p>
                <h2 className={style.section_ttl_white}>使わない理由がない</h2>
                <p className={style.text}>外注するより、AIに任せる方が圧倒的に安く、長く、確実に動く。</p>
              </div>
              <div className={style.numbers_box}>
                <div className={style.box_one}>
                  <div className={style.box_ttl}>
                    <span className={style.number}>01</span>
                    <h3 className={style.month_time}>月間稼働時間</h3>
                  </div>
                  <div className={style.gauge}>
                    <div className={style.human_graph}>
                      <p className={style.human}>人間</p>
                      <div className={style.human_graph_line}></div>
                      <p className={style.time}>160h</p>
                    </div>
                    <div className={style.agent_graph}>
                      <p className={style.agent}>AI</p>
                      <div className={style.agent_graph_line}></div>
                      <p className={style.time}>160h</p>
                    </div>
                  </div>
                  <div className={style.numbers_group}>
                    <h4 className={style.numbers_large}>744<span>h/月</span></h4>
                    <h5 className={style.numbers_sub}>24/365で臨戦態勢</h5>
                    <p className={style.numbers_text}>24/人間は労働法で月160時間しか働けない。AIは744時間（24h×31日）、人間の4.65倍動ける。</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
