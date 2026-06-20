import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";
import ExploreCard from "./components/ExploreCard/ExploreCard";

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
            <Image
              src="/images/hexagon_2.svg"
              alt="六角形の装飾"
              width={440}
              height={380}
              className={style.hexagon_2}
            />
            <Image
              src="/images/hexagon.svg"
              alt="六角形の装飾"
              width={290}
              height={290}
              className={style.hexagon}
            />
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
            <div className={style.try_it_now_wrapper}>
              <div className={style.try_it_now_inner}>
                <p className="section_name">TRY IT NOW</p>
                <h2 className="section_ttl">触って、体験する。</h2>
                <p className={style.text}>
                  TechHive Agent の実際のUIをそのまま埋め込んでいます。スクロール・クリックして操作感をご確認ください。
                </p>
              </div>
              <div className={style.preview}>
                  <Image
                    src="/images/preview.jpg"
                    alt="プレビュー画像"
                    width={1080}
                    height={667}
                    className={style.preview_img}
                  />
              </div>
            </div>
          </section>

          {/* A NEW STANDARD */}
          <section className={style.a_new_standard}>
            <div className={style.a_new_standard_wrapper}>
              <div className={style.a_new_standard_inner}>
                <p className="section_name">A NEW STANDARD</p>
                <h2 className="section_ttl">ノンコア業務、全部AIに任せませんか？</h2>
                <p className={style.text}>採用・労務・問合せ対応——人事のノンコア業務を担ってきた人手は、いつかは退職か交代となります。AIは、辞めず、24時間動き、賢くなり続けます。</p>
              </div>
              <div className={style.axis_box_group}>
                <div className={style.axis_box}>
                  <div className={style.axis_group}>
                    <p className={style.axis}>AXIS 01</p>
                    <h3 className={style.axis_ttl}>時間</h3>
                    <p className={style.axis_text}>人手の稼働は労働法の8時間に縛られる。<br />AIは法律の対象外、24/365動き続ける。</p>
                  </div>
                  <div className={style.axis_group_img}>
                    <Image
                      src="/images/axis_01_human.png"
                      alt="人が働く時間"
                      width={711}
                      height={72}
                    />
                    <Image
                      src="/images/axis_01_ai.png"
                      alt="人が働く時間"
                      width={711}
                      height={72}
                    />
                    <p className={style.sup}>※ 平日／休日を問わず365日同じ稼働</p>
                  </div>
                </div>

                <div className={style.axis_box}>
                  <div className={style.axis_group}>
                    <p className={style.axis}>AXIS 02</p>
                    <h3 className={style.axis_ttl}>積み重ね</h3>
                    <p className={style.axis_text}>人手は退職するたび、業務知が0に戻る。<br />AIはスキルを蓄積し、組織に残り、積み上がり続ける。</p>
                  </div>
                  <Image
                    src="/images/axis_02_graph.png"
                    alt="AIスキルの蓄積"
                    width={711}
                    height={345}
                  />
                </div>

                <div className={style.axis_box}>
                  <div className={style.axis_group}>
                    <p className={style.axis}>AXIS 03</p>
                    <h3 className={style.axis_ttl}>業務の精度</h3>
                    <p className={style.axis_text}>業務精度、判断力はは属人的であり、<br />個人の成長上限で止まる。<br />AIはモデルの進化により推論力が増しつづける。</p>
                  </div>
                  <Image
                    src="/images/axis_03_graph.png"
                    alt="業務制度"
                    width={711}
                    height={345}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* EXPLORE */}
          <section className={style.explore}>
            <div className={style.explore_wrapper}>
              <div className={style.explore_inner}>
                <p className="section_name">EXPLORE</p>
                <h2 className="section_ttl">深掘りする</h2>
                <p className={style.text}>関心のあるテーマからどうぞ。</p>
              </div>
              <div className={style.explore_group}>
                <ExploreCard
                  href="/methodology"
                  sectionName="METHODOLOGY"
                  title="製品の仕組み"
                  description="BFC × Skill、4段階リスクティア、Claudeモデルの使い分け、How it works。"
                  detailText="詳細はこちら→"
                />
                <ExploreCard
                  href="/technology"
                  sectionName="TECHNOLOGY"
                  title="業務領域別の対応"
                  description="採用 / 労務 / 入退社 / 社内HR問合せ。BFC 183プロセスから貴社業務にカスタマイズ。"
                  detailText="詳細はこちら→"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
