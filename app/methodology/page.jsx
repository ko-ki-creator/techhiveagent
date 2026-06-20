import Image from 'next/image';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import styles from './page.module.css';

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
                </div>
            </div>
        </>
    );
}