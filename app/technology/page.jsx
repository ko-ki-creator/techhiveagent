import Image from "next/image";
import PageTitle from "../components/PageTitle/PageTitle";
import styles from "./page.module.css";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import AnthropicCard from "../components/AnthropicCard/AnthropicCard";
import Tab from "../components/Tab/Tab";

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
            </div>
        </>
    );
}