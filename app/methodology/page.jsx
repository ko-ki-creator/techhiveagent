import Image from 'next/image';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import styles from './page.module.css';
import PhaseCard from '../components/PhaseCard/PhaseCard';

export default function Methodology() {
    return (
        <>
            <div className={styles.wrapper}>

                {/* ページタイトル */}
                <div className={styles.methodology_wrapper}>
                    <PageTitle
                        title="Methodology"
                        subTitle="業務を可視化し、実装し、現場に定着させる。"
                        text="AsikazeはHRコンサルとして創業、これまで7年の実績を積んできました。 そこで見えた「HR業務をAIが扱える形に変えるには何が必要か」を、 BFC・スキル・リスクティアという独自フレームワークに落とし込みました。"
                    />
                    <Image
                        src="/images/pagetitle_logo.png"
                        alt='ロゴ'
                        width={357}
                        height={316}
                        className={styles.pagetitle_logo}
                    />
                </div>

                {/* OUR APPROACH */}
                <div className="our_approach_wrapper">
                    <SectionTitle
                        sectionName="OUR APPROACH"
                        title="MAP → BUILD → SCALE"
                        text="人に依存していた業務を、AI Agentと進められる仕組みに変える。"
                    />
                    <div className={styles.phase}>
                        <PhaseCard
                            className={styles.map}
                            typeClassName={styles.mapType}
                            phase="PHASE 01"
                            phaseTitle="MAP"
                            src="/images/map.png"
                            alt="業務を可視化する"
                            title="業務を可視化する"
                            text="HR現場に入り込み、業務プロセス・判断基準・暗黙知を可視化します。必要に応じて、RPOやBPOとして実務も担いながら、AI化すべき業務を見極めます。"
                            tags={[
                                "入退社手続き",
                                "勤怠管理",
                                "採用対応",
                                "社保・給与",
                                "HR・Saas運用",
                            ]}
                        />
                        <PhaseCard
                            className={styles.build}
                            typeClassName={styles.buildType}
                            phase="PHASE 02"
                            phaseTitle="BUILD"
                            src="/images/build.png"
                            alt="Agentを実装する"
                            title="Agentを実装する"
                            text="定型化できる業務をAI Agentのスキルとして実装。既存のHR SaaSや社内フローと接続し、必要に応じて人の確認を挟む運用を設計します。"
                            tags={[
                                "業務フロー分析",
                                "AIエージェント開発",
                                "自動化設計",
                                "既存SaaS連携",
                            ]}
                        />
                        <PhaseCard
                            className={styles.scale}
                            typeClassName={styles.scaleType}
                            phase="PHASE 03"
                            phaseTitle="SCALE"
                            src="/images/scale.png"
                            alt="自走運用に定着させる"
                            title="自走運用に定着させる"
                            text="実行ログと現場フィードバックをもとに、スキルを継続改善。担当者が変わっても業務品質が保たれる、社内に残る仕組みへ育てます。"
                            tags={[
                                "AIの自走化",
                                "社内への定着支援",
                                "工数50~90%削減",
                                "撤退後も機能し続ける",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}