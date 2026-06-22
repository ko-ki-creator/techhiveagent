import Image from 'next/image';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import styles from './page.module.css';
import PhaseCard from '../components/PhaseCard/PhaseCard';
import SkillWorkflowCard from '../components/SkillWorkflowCard/SkillWorkflowCard';

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
                <div className={styles.our_approach_wrapper}>
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

                {/* HR Framework */}
                <div className={styles.hr_framework_wrapper}>
                    <PageTitle
                        title="HR Framework"
                        subTitle="構造化されたHR業務だけが、AIに任せられる。"
                        text="BFC（業務ファンクションチャート）は、日本企業のHR業務を8つの機能軸と186のファンクションに体系化した、Asikaze独自のフレームワークです。国際標準APQC PCF v7.4をベースに、日本固有の36協定・年末調整13種控除・マイナンバー等のプロセスを追加。SHRM BoCK・ISO 30414とも整合します。1ファンクション = 1スキルとして実装可能な単位まで分解されているため、「どの業務をAIに任せ、どの業務を人に残すか」が一意に決まります。"
                    />
                    <div className={styles.function_img}>
                        <Image
                            src="/images/framework_hexagon_darkblue.png"
                            alt='HR業務ファンクション'
                            width={280}
                            height={280}
                            className={styles.hexagon_darkblue}
                        />
                        <div className={styles.function_inner}>
                            <div className={styles.function_number}>
                                <h2 className={styles.number}>186</h2>
                                <div className={styles.function_group}>
                                    <h3 className={styles.hr_title}>HR業務ファンクション</h3>
                                    <p className={styles.hr_text}>Business Function Chart（BFC）v8.2</p>
                                </div>
                            </div>
                            <Image
                                src="/images/framework_hexagon_blue.png"
                                alt='HR業務ファンクション'
                                width={440}
                                height={440}
                                className={styles.hexagon_blue}
                            />
                        </div>
                        <Image
                            src="/images/framework_hexagon_green.svg"
                            alt='HR業務ファンクション'
                            width={160}
                            height={160}
                            className={styles.hexagon_green}
                        />
                    </div>
                </div>

                {/* SKILL & WORKFLOW */}
                <div className={styles.skill_workflow_wrapper}>
                    <SectionTitle
                        sectionName="SKILL & WORKFLOW"
                        title="業務を Skill にする。"
                        text="ベテランの暗黙知を、プロンプト/ポリシー/テスト/ナレッジとして型安全に構造化。Skillが最大の納品物です。"
                    />
                    <div className={styles.skill_workflow_group}>
                        <SkillWorkflowCard
                            className={styles.skill}
                            title="業務を分解し、スキル化する"
                            text="担当者の業務手順、判断基準、例外対応、使用しているHR SaaSを整理し、AIが実行できる業務単位へ構造化します。HR Frameworkに基づき、再利用可能な「業務スキル」として定義します。"
                            number="01"
                        />
                        <SkillWorkflowCard
                            className={styles.implementation}
                            title="AI Agentに実装する"
                            text="スキル化された業務をAI Agentに実装し、既存のSaaSや業務フローと接続します。定型業務は自動化し、判断が必要な業務は人が確認できる形で運用します。"
                            number="02"
                        />
                        <SkillWorkflowCard
                            className={styles.improvement}
                            title="運用しながら改善する"
                            text="Agentの実行ログや現場からのフィードバックをもとに、業務スキルを継続的に改善します。業務変更や制度変更にも対応し、現場で使われ続ける仕組みに育てます。"
                            number="03"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}