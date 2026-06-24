"use client";

import { useState } from 'react';
import styles from './Tab.module.css';

export default function Tab() {

    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <div className={styles.tabs}>
                <button
                    className={` ${styles.tab_btn} ${activeTab === "tab1" ? "active" : "" } ${styles.opus} `}
                    onClick={() => setActiveTab("tab1")}
                >
                    <h2 className={styles.number}>01</h2>
                    <div className={styles.model_name}>
                        <h3 className={styles.title}>Opus4.2</h3>
                        <p className={styles.meant}>最高難度の推論</p>
                    </div>
                </button>
                <button
                    className={` ${styles.tab_btn} ${activeTab === "tab2" ? "active" : "" } ${styles.sonnet} `}
                    onClick={() => setActiveTab("tab2")}
                >
                    <h2 className={styles.number}>02</h2>
                    <div className={styles.model_name}>
                        <h3 className={styles.title}>Sonnet 4.6</h3>
                        <p className={styles.meant}>日常業務の主力</p>
                    </div>
                </button>
                <button
                    className={` ${styles.tab_btn} ${activeTab === "tab3" ? "active" : "" } ${styles.haiku} `}
                    onClick={() => setActiveTab("tab3")}
                >
                    <h2 className={styles.number}>03</h2>
                    <div className={styles.model_name}>
                        <h3 className={styles.title}>Haiku 4.5</h3>
                        <p className={styles.meant}>超高速・大量処理</p>
                    </div>
                </button>
            </div>

            <div className={styles.tab_panels}>
                <div className={`${styles.tab_container} ${styles.opus} ${activeTab === "tab1" ? styles.active : styles.inactive}`} role="tabpanel" aria-hidden={activeTab !== "tab1"}>
                    <div className={styles.model_card}>
                        <div className={` ${styles.circle} ${styles.circle_blue} `}></div>
                        <div className={styles.model}>
                            <p className={styles.heading}>MODEL</p>
                            <p className={styles.content}>Claude Opus 4.7</p>
                        </div>
                        <div className={styles.model}>
                            <p className={styles.heading}>TIER</p>
                            <p className={styles.content}>Flagship / Reasoning</p>
                        </div>
                        <div className={styles.model}>
                            <p className={styles.heading}>CONTEXT</p>
                            <p className={styles.content}>1,000,000 tokens</p>
                        </div>
                        <div className={styles.model}>
                            <p className={styles.heading}>POSITION</p>
                            <p className={styles.content}>最高難度・最重要判断</p>
                        </div>
                    </div>
                    <div className={styles.tab_content}>
                        <h2 className={styles.tab_title}>世界最高水準の<span className={styles.change_blue}>推論モデル</span>。“考えて判断する” AI。</h2>
                        <p className={styles.tab_text}>Anthropic の最新フラッグシップ。AIME（全米数学オリンピック）／GPQA Diamond（博士レベル科学）／MMLU-Pro（大学院レベル知識）などの国際ベンチマークで業界最高水準のスコア。 米国司法試験・医師国家試験レベルの判断力を持ち、1Mトークンの長大な文脈にも対応します。</p>
                        <div className={styles.tab_example_strong}>
                            <div className={styles.tab_group}>
                                <h3 className={styles.tab_group_title}>活用事例（例）</h3>
                                <ul className={styles.tab_list}>
                                    <li className={styles.tab_item}>複雑な合否判定（複数条件の突合）</li>
                                    <li className={styles.tab_item}>規程・ガイドラインの解釈</li>
                                    <li className={styles.tab_item}>候補者の総合評価・ポートフォリオ判断</li>
                                    <li className={styles.tab_item}>複雑な社内問合せの一次判断</li>
                                </ul>
                            </div>
                            <div className={styles.tab_group}>
                                <h3 className={styles.tab_group_title}>強み</h3>
                                <ul className={styles.tab_list}>
                                    <li className={styles.tab_item}>推論ベンチマーク世界最高水準</li>
                                    <li className={styles.tab_item}>専門家級の判断精度</li>
                                    <li className={styles.tab_item}>1M トークンの長文脈読解</li>
                                    <li className={styles.tab_item}>多段エージェント業務に最適</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.tab_container} ${styles.sonnet} ${activeTab === "tab2" ? styles.active : styles.inactive}`} role="tabpanel" aria-hidden={activeTab !== "tab2"}>
                    <div className={styles.model_card}>
                        <div className={` ${styles.circle} ${styles.circle_purple} `}></div>
                        <div className={styles.model}>
                            <p className={styles.heading}>MODEL</p>
                            <p className={styles.content}>Claude Sonnet 4.6</p>
                        </div>
                        <div className={styles.model}>
                            <p className={styles.heading}>TIER</p>
                            <p className={styles.content}>Balanced / Workhorse</p>
                        </div>
                        <div className={styles.model}>
                            <p className={styles.heading}>CONTEXT</p>
                            <p className={styles.content}>200,000 tokens</p>
                        </div>
                        <div className={styles.model}>
                            <p className={styles.heading}>POSITION</p>
                            <p className={styles.content}>日常業務の中核</p>
                        </div>
                    </div>
                    <div className={styles.tab_content}>
                        <h2 className={styles.tab_title}>速度・コスト・品質の<span className={styles.change_purple}>バランス型</span><br />TechHive Agent の主力モデル。</h2>
                        <p className={styles.tab_text}>Opus に迫る処理能力を、はるかに速く・安く提供するバランスモデル。TechHive Agent の日常業務の大半を担当します。 高頻度に発生する定型業務や、ある程度の判断を伴う書類処理が得意分野です。</p>
                        <div className={styles.tab_example_strong}>
                            <div className={styles.tab_group}>
                                <h3 className={styles.tab_group_title}>活用事例（例）</h3>
                                <ul className={styles.tab_list}>
                                    <li className={styles.tab_item}>応募情報の抽出・構造化</li>
                                    <li className={styles.tab_item}>規程・書類の一次スクリーニング</li>
                                    <li className={styles.tab_item}>面接日程調整メールの作成</li>
                                    <li className={styles.tab_item}>定型メール・案内文の下書き</li>
                                    <li className={styles.tab_item}>Slack / カレンダー連携業務</li>
                                </ul>
                            </div>
                            <div className={styles.tab_group}>
                                <h3 className={styles.tab_group_title}>強み</h3>
                                <ul className={styles.tab_list}>
                                    <li className={styles.tab_item}>高性能を維持しつつ高速</li>
                                    <li className={styles.tab_item}>コスト効率に優れる</li>
                                    <li className={styles.tab_item}>高頻度業務に最適</li>
                                    <li className={styles.tab_item}>汎用的な文書処理能力</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.tab_container} ${styles.haiku} ${activeTab === "tab3" ? styles.active : styles.inactive}`} role="tabpanel" aria-hidden={activeTab !== "tab3"}>
                    <div className={styles.model_card}>
                        <div className={` ${styles.circle} ${styles.circle_green} `}></div>
                        <div className={styles.model}>
                            <p className={styles.heading}>MODEL</p>
                            <p className={styles.content}>Claude Haiku 4.5</p>
                        </div>
                        <div className={styles.model}>
                            <p className={styles.heading}>TIER</p>
                            <p className={styles.content}>Fastest / Lightweight</p>
                        </div>
                        <div className={styles.model}>
                            <p className={styles.heading}>CONTEXT</p>
                            <p className={styles.content}>200,000 tokens</p>
                        </div>
                        <div className={styles.model}>
                            <p className={styles.heading}>POSITION</p>
                            <p className={styles.content}>大量処理・リアルタイム</p>
                        </div>
                    </div>
                    <div className={styles.tab_content}>
                        <h2 className={styles.tab_title}><span className={styles.change_green}>最軽量・最高速</span>。大量の定型処理を瞬時にこなす。</h2>
                        <p className={styles.tab_text}>Claude 3モデル中最速。判断よりも速度と処理量が求められる、シンプルな変換・分類・通知業務を担当します。 大量のイベントを秒単位で裁くタスクで本領発揮するモデルです。</p>
                        <div className={styles.tab_example_strong}>
                            <div className={styles.tab_group}>
                                <h3 className={styles.tab_group_title}>活用事例（例）</h3>
                                <ul className={styles.tab_list}>
                                    <li className={styles.tab_item}>重複応募チェック</li>
                                    <li className={styles.tab_item}>Slack 通知・リマインド送信</li>
                                    <li className={styles.tab_item}>ログ集計・日次サマリー生成</li>
                                    <li className={styles.tab_item}>データの分類・タグ付け</li>
                                    <li className={styles.tab_item}>問い合わせの種別判定・振り分け</li>
                                </ul>
                            </div>
                            <div className={styles.tab_group}>
                                <h3 className={styles.tab_group_title}>強み</h3>
                                <ul className={styles.tab_list}>
                                    <li className={styles.tab_item}>圧倒的な処理速度</li>
                                    <li className={styles.tab_item}>コスト効率が最も高い</li>
                                    <li className={styles.tab_item}>大量処理・リアルタイム向き</li>
                                    <li className={styles.tab_item}>シンプルな判断に十分な精度</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}