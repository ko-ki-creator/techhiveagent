import Image from 'next/image';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import styles from './page.module.css';
import PhaseCard from '../components/PhaseCard/PhaseCard';
import SkillWorkflowCard from '../components/SkillWorkflowCard/SkillWorkflowCard';
import TierCard from '../components/TierCard/TierCard';
import AreaCard from '../components/AreaCard/AreaCard';
import ExploreCard from '../components/ExploreCard/ExploreCard';
import Link from 'next/link';

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

                {/* RISK TIER */}
                <div className={styles.risk_tier_wrapper}>
                    <SectionTitle
                        sectionName="RISK TIER"
                        title="4段階リスクティア"
                        text="AIは下準備、判断は人間。行動の影響範囲に応じて、AIの権限を4段階に分離します。"
                    />
                    <div className={styles.tier}>
                        <TierCard
                            className={styles.tier_one}
                            number="TIER 01"
                            title="ReadOnly"
                            textTop="読み取り業務。"
                            textBottom="AIが自動実行→ログ記録"
                            example="例:応募データ取込、スクリーニング、勤怠集計"
                        />
                        <TierCard
                            className={styles.tier_two}
                            number="TIER 02"
                            title="Internal Write"
                            textTop="内部書込。"
                            textBottom="AIが実行 → 月次監査"
                            example="例: ATS更新、Sheets書込、月次レポート"
                        />
                        <TierCard
                            className={styles.tier_three}
                            number="TIER 03"
                            title="External Action"
                            textTop="社外発信。"
                            textBottom="人間承認必要"
                            example="例:例: メール送信、スカウト、面接日程提案"
                        />
                        <TierCard
                            className={styles.tier_four}
                            number="TIER 04"
                            title="Irreversible"
                            textTop="不可逆。"
                            textBottom="必ず人間承認"
                            example="例: 不合格通知、内定通知、退職辞令"
                        />
                    </div>
                </div>

                {/* SCOPE */}
                <div className={styles.scope_wrapper}>
                    <SectionTitle
                        sectionName="SCOPE"
                        title="対応業務領域"
                        text="採用32 / 労務44 / 勤怠14 / 給与20 / 評価育成24 / 人事企画23 / 問合せ9 / 従業員関係20。"
                    />
                    <div className={styles.area}>
                        <AreaCard
                            areaNumber="AREA 01"
                            title = "採用"
                            text = "応募〜面接調整〜合否通知までを9ステップで自動化。スカウト返信ドラフト・面接官調整・候補者リマインド。"
                        />
                        <AreaCard
                            areaNumber="AREA 02"
                            title = "労務"
                            text = "社保・雇用保険・住所変更・扶養変更・年末調整13種控除。法令ベースの判定で対応。"
                        />
                        <AreaCard
                            areaNumber="AREA 03"
                            title = "入退社"
                            text = "入社書類収集・アカウント発行・オンボーディングメール配信・退社時引継ぎ管理。"
                        />
                        <AreaCard
                            areaNumber="AREA 04"
                            title = "社内HR問合せ対応"
                            text = "「有給残は？」「給与明細は？」のFAQ自動応答。複雑な相談は人間にエスカレ。"
                        />
                    </div>
                    <div className={styles.bfc}>
                        <p className={styles.bfc_text}>BFCは「標準実装」です。実際の対応領域は、貴社の業務フローに合わせてオーダーメイドで構築。マニュアル・実データを「育てる対話」でTechHive Agentはアップデートしていきます。</p>
                    </div>
                </div>

                {/* EXPLORE */}
                <div className={styles.explore_wrapper}>
                    <ExploreCard
                        href="/technology"
                        sectionName="TECHNOLOGY"
                        title="技術スタックを見る"
                        description="Anthropic Managed Agents / Opus・Sonnet・Haiku / 連携SaaS / セキュリティ"
                        detailText="Technology →"
                    />
                    <ExploreCard
                        href="/contact"
                        sectionName="CONTACT"
                        title="話を聞く"
                        description="30分オンライン相談 / パイロット申込"
                        detailText="Contact →"
                    />
                </div>
            </div>
        </>
    );
}