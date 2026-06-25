import Image from "next/image";
import PageTitle from "../components/PageTitle/PageTitle";
import styles from "./page.module.css";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import AnthropicCard from "../components/AnthropicCard/AnthropicCard";
import Tab from "../components/Tab/Tab";
import ExploreCard from "../components/ExploreCard/ExploreCard";

export default function Technology() {
    return(
        <>
            <div className={styles.wrapper}>

                <div className={styles.technology_wrapper}>
                    <PageTitle
                        title="Technology"
                        subTitle="世界最先端のAIインフラを、そのまま。"
                        text="Anthropic Managed Agents + Agent OS Framework に乗ることで、Agent loop / Tool executor / Sandbox を自前で作らず、 Claude Codeと同じ実行基盤を API として利用しています。"
                    />
                    <Image
                        src="/images/pagetitle_logo.png"
                        alt='ロゴ'
                        width={357}
                        height={316}
                        className={styles.pagetitle_logo}
                    />
                </div>

                {/* PARTNERSHIP */}
                <section className={styles.partnership}>
                    <SectionTitle
                        sectionName="PARTNERSHIP"
                        title="Built on Anthropic."
                    />
                    <div className={styles.anthropic_container}>
                        <p className={styles.anthropic}>ANTHROPIC — Claude Partner Network 登録企業</p>
                        <h2 className={styles.title}>Anthropic Managed Agents</h2>
                        <p className={styles.text}>をインフラに使用しています。</p>
                    </div>
                    <div className={styles.anthropic_inner}>
                        <AnthropicCard
                            number="01"
                            titleTop="最前線の Claude が、"
                            titleBottom="業務の前線で動く"
                            text="Anthropic が継続的に改善する最新モデル（Opus / Sonnet / Haiku）を採用。モデルが賢くなれば、貴社のAI社員も同時に賢くなるのが最大の特徴です。"
                        />
                        <AnthropicCard
                            number="02"
                            titleTop="Anthropic 自身が運用する"
                            titleBottom="安全設計が、そのまま。"
                            text="Constitutional AI、実行中の行動監視、不適切な出力の抑制など、Anthropic が社内で培ってきた安全機構がそのまま適用されます。"
                        />
                        <AnthropicCard
                            number="03"
                            titleTop="Claude Partner Networkへ参加"
                            titleBottom="最新をいち早くインストール。"
                            text="Anthropic 側の技術の更新をいち早くキャッチアップし、Managed Agents をお客様へ提供できる体制を整えています。"
                        />
                    </div>
                </section>

                {/* MODEL INTELLIGENCE */}
                <section className={styles.model_intelligence}>
                    <SectionTitle
                        sectionName="MODEL INTELLIGENCE"
                        title="Opus, Sonnet, Haiku."
                        text="業務ごとに、最適なClaudeモデルを使い分ける。"
                    />
                    <Tab />
                </section>

                {/* SECURITY */}
                <section className={styles.security}>
                    <SectionTitle
                        sectionName="SECURITY"
                        title="セキュリティ・監査"
                        text="人事データは個人の生活に直結します。Anthropic / Vercel の隔離されたサンドボックス内で完結し、データの読み書き・外部送信はすべて Asikaze の API を必ず経由します。AI が直接 DB や外部サービスに触れることはありません。"
                    />
                    <div className={styles.security_card}>
                        <ul className={styles.security_list}>
                            <li className={styles.security_item}>
                                <h3 className={styles.security_content}>モデル層の安全性</h3>
                                <p className={styles.security_text}>基盤モデルは Anthropic Claude。AUP（利用規定）違反のブロックと Constitutional AI による有害・規約違反出力の抑制をモデル層で標準装備。TechHive Agent は独自に AI を作らず、Anthropic の安全機構をそのまま土台にしています。</p>
                            </li>
                            <li className={styles.security_item}>
                                <h3 className={styles.security_content}>権限の最小化・仲介</h3>
                                <p className={styles.security_text}>エージェントは DB にも外部 API にも直接接続できません。全アクセスは TechHive Agent の制御ゲートウェイ1点を経由し、テナントごとの権限スコープで制限。暗号化保管し、必要時のみ監査ログ付きで限定提供。常時保持はさせません</p>
                            </li>
                            <li className={styles.security_item}>
                                <h3 className={styles.security_content}>人間による承認（HITL）</h3>
                                <p className={styles.security_text}>操作をリスク段階（1. 参照 / 2. 内部更新 / 3. 外部アクション / 4. 不可逆操作）で分類。メール送信・合否通知など影響の大きい操作は人間の承認を必須にし、不可逆操作はダブル承認を求めます。</p>
                            </li>
                            <li className={styles.security_item}>
                                <h3 className={styles.security_content}>アクセストークン管理</h3>
                                <p className={styles.security_text}>テナント発行 API トークンは不可逆（SHA-256）でハッシュ化保存・発行時のみ平文表示・有効期限付き。漏洩時も即時失効できます。</p>
                            </li>
                            <li className={styles.security_item}>
                                <h3 className={styles.security_content}>監査ログ・操作証跡</h3>
                                <p className={styles.security_text}>エージェントの各操作を「いつ・誰の指示で・どのツールを・どんな入出力で実行したか」を追記専用（append-only）の台帳に記録。後からの改ざん・削除はできません。月次監査・例外調査・問い合わせ対応に利用できます。</p>
                            </li>
                            <li className={styles.security_item}>
                                <h3 className={styles.security_content}>テナント分離</h3>
                                <p className={styles.security_text}>全データにデータベースレベルのアクセス制御を適用し、他社データへのアクセスを遮断。エージェントは TechHive Agent の API 経由でしか DB に触れられず、テナントをまたぐ参照は構造的に不可能です。</p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* EXPLORE */}
                <div className={styles.explore_wrapper}>
                    <ExploreCard
                        href="/technology"
                        sectionName="METHODOLOGY"
                        title="方法論を見る"
                        description="BFC / Skill / MAP-BUILD-SCALE / リスクティア / 対応業務領域"
                        detailText="Methodology →"
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