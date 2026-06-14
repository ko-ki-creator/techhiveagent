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
                <div className={`${style.box} ${style.box_one}`}>
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

                <div className={`${style.box} ${style.box_two}`}>
                  <div className={style.box_ttl}>
                    <span className={style.number}>02</span>
                    <h3 className={style.month_time}>費用削減</h3>
                  </div>
                  <div className={style.gauge}>
                    <div className={style.human_graph}>
                      <p className={style.human}>RPO 2名</p>
                      <div className={style.human_graph_line}></div>
                      <p className={style.time}>¥140万/月</p>
                    </div>
                    <div className={style.agent_graph}>
                      <p className={style.agent}>THA</p>
                      <div className={style.agent_graph_line}></div>
                      <p className={style.time}>¥20万/月</p>
                    </div>
                  </div>
                  <div className={style.numbers_group}>
                    <h4 className={style.numbers_large}>1,440<span>万/年</span></h4>
                    <h5 className={style.numbers_sub}>テスト稼働で1,440万円削減</h5>
                    <p className={style.numbers_text}>月70万のRPO 2名分を、月20万のTHAに置き換え。月120万円×12ヶ月。</p>
                  </div>
                  <p className={style.note}>※当社グループRPO領域テスト稼働実績ベース</p>
                </div>

                <div className={`${style.box} ${style.box_three}`}>
                  <div className={style.box_ttl}>
                    <span className={style.number}>03</span>
                    <h3 className={style.month_time}>工数削減</h3>
                  </div>
                  <div className={style.gauge}>
                    <div className={style.human_graph}>
                      <p className={style.human}>人手 2名</p>
                      <div className={style.human_graph_line}></div>
                      <p className={style.time}>320h/月</p>
                    </div>
                    <div className={style.agent_graph}>
                      <p className={style.agent}>AI委任</p>
                      <div className={style.agent_graph_line}></div>
                      <p className={style.time}>0h</p>
                    </div>
                  </div>
                  <div className={style.numbers_group}>
                    <h4 className={style.numbers_large}>320<span>h/月</span></h4>
                    <h5 className={style.numbers_sub}>実績ベースで、人事工数を320h削減</h5>
                    <p className={style.numbers_text}>年換算 3,840時間。人事担当者は、評価・組織設計などコア業務に専念できる。</p>
                  </div>
                  <p className={style.note}>※当社グループRPO2名分の工数をAIが代替した実績ベース</p>
                </div>

                <div className={`${style.box} ${style.box_four}`}>
                  <div className={style.box_ttl}>
                    <span className={style.number}>04</span>
                    <h3 className={style.month_time}>応答速度</h3>
                  </div>
                  <div className={style.gauge}>
                    <div className={style.human_graph}>
                      <p className={style.human}>人間</p>
                      <div className={style.human_graph_line}></div>
                      <p className={style.time}>数時間〜翌営業日</p>
                    </div>
                    <div className={style.agent_graph}>
                      <p className={style.agent}>AI</p>
                      <div className={style.agent_graph_line}></div>
                      <p className={style.time}>1分以内</p>
                    </div>
                  </div>
                  <div className={style.numbers_group}>
                    <h4 className={style.numbers_large}>1<span>分以内</span></h4>
                    <h5 className={style.numbers_sub}>24/365、1分以内に応答</h5>
                    <p className={style.numbers_text}>深夜・週末・連休、人間が動けない時間帯も1分以内に処理。問い合わせも申請も止まらない。</p>
                  </div>
                </div>
              </div>
              <div className={style.recruit}>
                <div className={style.recruit_group}>
                  <h5 className={style.limited}>※期間限定でパイロット顧客を募集しています。</h5>
                  <p className={style.limited_text}>6月から7月にかけて、特別料金オファー実施中。</p>
                </div>
                <Link href="/contact" className={style.recruit_contact_btn}>
                  <span className={style.recruit_contact_btn_text}>お問い合わせ・商談予約 →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* TRY IT NOW */}
          <section className={style.try_it_now}>
            <div className="try_it_now_wrapper">
              <div className="try_it_now_inner">
                <p className="section_name">TRY IT NOW</p>
                <h2 className="section_ttl">触って、体験する。</h2>
                <p className={style.text}>
                  TechHive Agent の実際のUIをそのまま埋め込んでいます。スクロール・クリックして操作感をご確認ください。
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
