import styles from './ContactForm.module.css'

export default function ContactForm() {
    return (
        <div className={styles.contact_form_wrapper}>
            <form>
                <div className={styles.form_wrapper}>

                    {/* 名前 */}
                    <div className={styles.name}>
                        <div className={styles.last_name}>
                            <label className={styles.label}>姓</label>
                            <input type="name" name="name" className={styles.input_box} required />
                        </div>
                        <div className={styles.first_name}>
                            <label className={styles.label}>名</label>
                            <input type="name" name="name" className={styles.input_box} required />
                        </div>
                    </div>

                    {/* メールアドレス */}
                    <div>
                        <label className={styles.label}>メールアドレス</label>
                        <input type="email" name='email' className={styles.input_box} required />
                    </div>

                    {/* 企業名 */}
                    <div>
                        <label className={styles.label}>企業名</label>
                        <input type="text" name='company' className={styles.input_box} required />
                    </div>

                    {/* 役職 */}
                    <div>
                        <label className={styles.label}>役職</label>
                        <input type="text" className={styles.input_box} required />
                    </div>

                    {/* 従業員規模 */}
                    <div>
                        <label className={styles.label}>従業員規模</label>
                        <select name="range" id="range" className={styles.input_box} required>
                            <option value="">1つ選択してください</option>
                            <option value="1">1</option>
                            <option value="2~10">2~10</option>
                            <option value="11~50">11~50</option>
                            <option value="51~100">51~100</option>
                            <option value="101~500">101~500</option>
                            <option value="501~1000">501~1000</option>
                            <option value="1001~3000">1001~3000</option>
                            <option value="3000以上">3000以上</option>
                        </select>
                    </div>

                    {/* 関心領域 */}
                    <div>
                        <label className={styles.label}>関心領域</label>
                        <select name="job" id="job" className={styles.input_box} required>
                            <option value="">1つ選択してください</option>
                            <option value="メーカー">メーカー</option>
                            <option value="サービス・インフラ">サービス・インフラ</option>
                            <option value="商社">商社</option>
                            <option value="ソフトウェア">ソフトウェア</option>
                            <option value="小売">小売</option>
                            <option value="広告・出版・マスコミ">広告・出版・マスコミ</option>
                            <option value="金融">金融</option>
                            <option value="官公庁・公社・団体">官公庁・公社・団体</option>
                        </select>
                    </div>

                    {/* 問い合わせ種別 */}
                    <div>
                        <label className={styles.label}>問い合わせ種別</label>
                        <select name='inquiry_type' id='inquiry_type' className={styles.input_box} required>
                            <option value="">1つ選択してください</option>
                            <option value="メーカー">メーカー</option>
                            <option value="サービス・インフラ">サービス・インフラ</option>
                            <option value="商社">商社</option>
                            <option value="ソフトウェア">ソフトウェア</option>
                            <option value="小売">小売</option>
                            <option value="広告・出版・マスコミ">広告・出版・マスコミ</option>
                            <option value="金融">金融</option>
                            <option value="官公庁・公社・団体">官公庁・公社・団体</option>
                        </select>
                    </div>

                    {/* メッセージ */}
                    <div>
                        <label className={styles.label}>メッセージ（任意）</label>
                        <textarea name="message" id="message" className={styles.message}></textarea>
                    </div>

                    {/* 送信ボタン */}
                    <button type='submit' value="送信" className={styles.submit}>送信する →</button>

                    <p className={styles.sup}>
                        送信後、2営業日以内にAsikaze担当者よりご連絡いたします。<br />個人情報はプライバシーポリシーに基づき適切に管理します。
                    </p>
                </div>
            </form>
        </div>
    );
}