import Image from 'next/image';
import PageTitle from '../components/PageTitle/PageTitle'
import styles from './page.module.css'
import ContactForm from '../components/ContactForm/ContactForm';

export default function Contact() {
    return(
        <>
            <div className={styles.wrapper}>
                {/* ページタイトル */}
                <section className={styles.contact_wrapper}>
                    <PageTitle
                        title={
                            <>
                                Get in<br />
                                touch
                            </>
                        }
                        subTitle="まずは、1業務から。"
                        text={
                            <>
                                最短2週間でBFC診断、3ヶ月で本番運用。<br />あなたの組織に合わせた進め方を提案します。
                            </>
                        }
                        className={styles.page_title}
                    />
                    <ContactForm className={styles.contact_form} />
                    <Image
                        src="/images/pagetitle_logo.png"
                        alt='ロゴ'
                        width={357}
                        height={316}
                        className={styles.pagetitle_logo}
                    />
                </section>
            </div>
        </>
    );
}