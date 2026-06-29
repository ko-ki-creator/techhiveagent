import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import styles from './page.module.css'
import Image from 'next/image'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import CaseCard from '../components/CaseCard/CaseCard'

export default function Hybrid() {
    return (
        <div className={styles.wrapper}>
            {/* ページタイトル */}
            <div className={styles.hybrid_wrapper}>
                <PageTitle
                    title="Hybrid"
                    subTitle={
                        <>
                            AIだけでは、業務は完結しない。<br />
                            <span style={{ color: 'var(--blue)' }}>AIを扱える人材も、ご一緒します。</span>
                        </>
                    }
                    text={
                        <>
                            私たちは、AIを導入して終わりではありません。<br />
                            AI Agentを使いこなす人と AI Agentそのものが、同じチームに加わります。<br />
                            現場に定着し、バリューを出すまで人間が伴走し、それでも人間に残る部分まで対応することが可能です。
                        </>
                    }
                />
                <Image
                    src="/images/pagetitle_logo.png"
                    alt='ロゴ'
                    width={357}
                    height={316}
                    className={styles.pagetitle_logo}
                />
            </div>

            {/* WHY HYBRID */}
            <div className={styles.why_hybrid_wrapper}>
                <SectionTitle
                    sectionName="WHY HYBRID"
                    title="「AIだけ」では、届かない場面がある。"
                    text="AIは「下準備」までは見事にこなします。それでも、人が引き取るほうが速い・確実な業務があります。"
                />
                <div className={styles.why_hybrid_inner}>
                    <div className={styles.spectrum}>
                        <h2 className={styles.spectrum_title}>HR業務のスペクトラム</h2>
                        <div className={styles.graph}>
                            <p className={styles.ai}>AIが担える領域</p>
                            <p className={styles.human}>人が引き取る</p>
                        </div>
                        <div className={styles.details}>
                            <p className={styles.ai_text}>← 定型・繰り返し業務（応募取込・面接調整・規程回答・勤怠集計）</p>
                            <p className={styles.human_text}>非定型・判断業務 →</p>
                        </div>
                    </div>

                    <p>右側の「人が引き取る」領域は、ケースごとに性質が違います。代表的なのは次の3つ。</p>

                    <div className={styles.why_hybrid_container}>
                        <CaseCard
                            number="Case 01"
                            title="前例のない判断"
                            text="ハラスメント対応、評価制度改定、組織再編。学習データに乏しい新規ケースは、最終判断を人が引き取るのが早い。"
                        />

                        <CaseCard
                            number="Case 02"
                            title="業務の立ち上げ"
                            text="新規Skillの設計、既存業務のBFC化、現場ヒアリング。AIが「自分のことを覚える」前段階は、人が伴走します。"
                        />

                        <CaseCard
                            number="Case 03"
                            title="運用・改善・対外対応"
                            text="AIエラー時の判断、運用ダッシュボードの監視、対外的な交渉。AIを「見守る人」がいると安定します。"
                        />
                    </div>
                </div>
            </div>

            {/* OUR ADVANTAGE */}
            <div className={styles.our_advantage_wrapper}>
                <SectionTitle
                    sectionName="OUR ADVANTAGE"
                    title="Asikazeグループだから。"
                />
                <div className={styles.our_advantage_inner}>
                    <div className={styles.our_advantage_container}>
                        <h3>
                            AsikazeにはHR導入コンサルが、<br />
                            Anselには エンジニア派遣で100名規模の<br />
                            AI／エンジニア人材が。
                        </h3>
                        <p>
                            グループ全体で「業務を分かる人」と「AIを動かせる人」を抱えています。貴社の人事業務を引き受け、AIに置き換え、運用までを伴走できる体制があります。
                        </p>
                    </div>
                    <div className={styles.company}>
                        <div className={styles.asikaze}>
                            <Image
                                src="/images/asikaze_logo.svg"
                                alt="株式会社Asikazeのロゴ"
                                width={40}
                                height={40}
                            />
                            <div className={styles.our_advantage_group}>
                                <h4>株式会社Asikaze</h4>
                                <p>
                                    HRコンサル / BFC / Skill設計
                                </p>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.ansel}>
                            <Image
                                src="/images/ansel_logo.svg"
                                alt="株式会社Ansel Technologiesのロゴ"
                                width={40}
                                height={40}
                            />
                            <div className={styles.our_advantage_group}>
                                <h4>株式会社Ansel Technologies</h4>
                                <p>
                                    エンジニア派遣 約100名 / AI・エンジニア・データ人材
                                </p>
                            </div>
                        </div>
                        <p>
                            = グループ全体で「人 × AI」を一気通貫で提供<br />
                            単なるツール販売ではなく、人材アサインまで含めた解決。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
